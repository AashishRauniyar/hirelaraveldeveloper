import mysql from 'mysql2/promise'
import 'dotenv/config';

async function initializeDatabase() {
  // Check if database environment variables are set
  if (!process.env.MYSQL_HOST || !process.env.MYSQL_USER || !process.env.MYSQL_PASSWORD || !process.env.MYSQL_DATABASE) {
    console.log('⚠️ Database environment variables not set, skipping database initialization')
    return
  }

  const maxRetries = 10;
  const retryDelay = 5000; // 5 seconds

  for (let i = 0; i < maxRetries; i++) {
    try {
      console.log(`🔄 Attempting to connect to database (attempt ${i + 1}/${maxRetries})...`)
      
      const connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        port: parseInt(process.env.MYSQL_PORT || '3306'),
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        connectTimeout: 10000, // 10 second timeout
      })

      try {
        // Drop table if exists
        await connection.execute('DROP TABLE IF EXISTS leads')

        // Create table with additional security fields
        await connection.execute(`
          CREATE TABLE leads (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL,
            phone VARCHAR(20) NOT NULL,
            company VARCHAR(100),
            message TEXT NOT NULL,
            ip_address VARCHAR(45) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            INDEX idx_ip_address (ip_address),
            INDEX idx_created_at (created_at)
          )
        `)

        console.log('✅ Database initialized successfully')
        return // Success, exit the retry loop
      } catch (error) {
        console.error('❌ Error initializing database:', error)
        throw error
      } finally {
        await connection.end()
      }
    } catch (error: any) {
      console.error(`❌ Database connection failed (attempt ${i + 1}/${maxRetries}):`, error.message)
      
      if (i === maxRetries - 1) {
        console.error('❌ Failed to connect to database after all retries')
        throw error
      }
      
      console.log(`⏳ Waiting ${retryDelay / 1000} seconds before retry...`)
      await new Promise(resolve => setTimeout(resolve, retryDelay))
    }
  }
}

// Run if this file is executed directly
if (require.main === module) {
  initializeDatabase()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
}

export { initializeDatabase } 