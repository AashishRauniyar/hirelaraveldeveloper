import { NextRequest, NextResponse } from 'next/server'
import mysql from 'mysql2/promise'
import nodemailer from 'nodemailer'
import { headers } from 'next/headers'

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5 // 5 requests per minute
const ipRequestCounts = new Map<string, { count: number; timestamp: number }>()

// Clean up old rate limit entries every 5 minutes
setInterval(() => {
  const now = Date.now()
  for (const [ip, data] of ipRequestCounts.entries()) {
    if (now - data.timestamp > RATE_LIMIT_WINDOW) {
      ipRequestCounts.delete(ip)
    }
  }
}, 5 * 60 * 1000)

// Create a connection pool for MySQL
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

// Validate email format
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate phone format
const isValidPhone = (phone: string) => {
  const phoneRegex = /^\+?[\d\s-]{10,}$/
  return phoneRegex.test(phone)
}

// Sanitize input
const sanitizeInput = (input: string) => {
  return input.replace(/[<>]/g, '') // Basic XSS prevention
}

export async function POST(req: NextRequest) {
  try {
    // Get client IP
    const forwardedFor = req.headers.get('x-forwarded-for')
    const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown'

    // Rate limiting check
    const now = Date.now()
    const requestData = ipRequestCounts.get(ip) || { count: 0, timestamp: now }
    
    if (now - requestData.timestamp > RATE_LIMIT_WINDOW) {
      // Reset counter for new window
      requestData.count = 1
      requestData.timestamp = now
    } else if (requestData.count >= MAX_REQUESTS_PER_WINDOW) {
      console.log(`Rate limit exceeded for IP: ${ip}`)
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    } else {
      requestData.count++
    }
    
    ipRequestCounts.set(ip, requestData)

    // Parse and validate request body
    const body = await req.json()
    const { name, email, phone, company, message } = body

    // Input validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      )
    }

    // Validate input lengths
    if (name.length > 100 || email.length > 100 || phone.length > 20 || 
        (company && company.length > 100) || message.length > 1000) {
      return NextResponse.json(
        { error: 'Input length exceeds maximum allowed.' },
        { status: 400 }
      )
    }

    // Validate email and phone formats
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format.' },
        { status: 400 }
      )
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format.' },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: sanitizeInput(phone),
      company: company ? sanitizeInput(company) : '',
      message: sanitizeInput(message)
    }

    console.log('💾 Saving to database...')
    // Save to MySQL using connection pool
    const [result] = await pool.execute(
      'INSERT INTO leads (name, email, phone, company, message, created_at, ip_address) VALUES (?, ?, ?, ?, ?, NOW(), ?)',
      [sanitizedData.name, sanitizedData.email, sanitizedData.phone, sanitizedData.company, sanitizedData.message, ip]
    )
    console.log('✅ Database save successful')

    // Try to send email, but don't fail the request if it fails
    try {
      console.log('📧 Sending email notification...')
      const mailOptions = {
        from: `HLD Contact <${process.env.SMTP_USER}>`,
        to: 'rauniyaaraashish@gmail.com',
        subject: 'New Lead from HLD Contact Form',
        html: `
          <h2>New Lead Details</h2>
          <p><strong>Name:</strong> ${sanitizedData.name}</p>
          <p><strong>Email:</strong> ${sanitizedData.email}</p>
          <p><strong>Phone:</strong> ${sanitizedData.phone}</p>
          <p><strong>Company:</strong> ${sanitizedData.company || '-'}</p>
          <p><strong>Message:</strong><br/>${sanitizedData.message}</p>
          <p><strong>Received at:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>IP Address:</strong> ${ip}</p>
        `,
      }

      await transporter.sendMail(mailOptions)
      console.log('✅ Email sent successfully')
    } catch (emailError) {
      console.error('❌ Email sending failed:', emailError)
      // Log the error but don't fail the request
    }

    return NextResponse.json({ 
      success: true,
      message: 'Lead saved successfully'
    })
  } catch (error: any) {
    console.error('❌ Contact API error:', error)
    // Log specific error details
    if (error.code) {
      console.error('Error code:', error.code)
    }
    if (error.sqlMessage) {
      console.error('SQL Error:', error.sqlMessage)
    }
    if (error.command) {
      console.error('SMTP Error:', error.command)
    }
    
    return NextResponse.json({ 
      error: 'Internal server error.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }, { status: 500 })
  }
} 