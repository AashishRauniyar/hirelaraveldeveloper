import mysql from 'mysql2/promise'
import 'dotenv/config';

async function initializeDatabase() {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
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
  } catch (error) {
    console.error('❌ Error initializing database:', error)
    throw error
  } finally {
    await connection.end()
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