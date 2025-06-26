const { spawn } = require('child_process');
const path = require('path');

// Environment variables
const NODE_ENV = process.env.NODE_ENV || 'production';
const SKIP_DB_INIT = process.env.SKIP_DB_INIT === 'true';

console.log('🚀 Starting application...');
console.log(`📦 Environment: ${NODE_ENV}`);
console.log(`🗄️ Skip DB Init: ${SKIP_DB_INIT}`);

async function startApp() {
  try {
    // Only run database initialization if not skipped and in production
    if (!SKIP_DB_INIT && NODE_ENV === 'production') {
      console.log('🔧 Initializing database...');
      
      const dbInit = spawn('npx', [
        'ts-node',
        '--project',
        'scripts/tsconfig.json',
        'scripts/init-db.ts'
      ], {
        stdio: 'inherit',
        shell: true
      });
      
      await new Promise((resolve, reject) => {
        dbInit.on('close', (code) => {
          if (code === 0) {
            console.log('✅ Database initialization completed');
            resolve();
          } else {
            console.log('⚠️ Database initialization failed, continuing without it...');
            resolve(); // Continue even if db init fails
          }
        });
        
        dbInit.on('error', (error) => {
          console.error('❌ Database initialization error:', error.message);
          resolve(); // Continue even if db init fails
        });
      });
    } else {
      console.log('⏭️ Skipping database initialization');
    }
    
    // Start Next.js application
    console.log('🎯 Starting Next.js application...');
    const nextApp = spawn('npx', ['next', 'start'], {
      stdio: 'inherit',
      shell: true
    });
    
    nextApp.on('close', (code) => {
      console.log(`Next.js application exited with code ${code}`);
      process.exit(code);
    });
    
    nextApp.on('error', (error) => {
      console.error('❌ Failed to start Next.js application:', error);
      process.exit(1);
    });
    
  } catch (error) {
    console.error('❌ Startup error:', error);
    process.exit(1);
  }
}

// Handle process signals
process.on('SIGTERM', () => {
  console.log('📴 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('📴 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

// Start the application
startApp(); 