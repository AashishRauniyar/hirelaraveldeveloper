# Deployment Guide

## Docker Build Fix

The Docker build was failing because the build process was trying to connect to a MySQL database during the build phase. This has been fixed by:

1. **Separated database initialization from build process**: Database initialization now happens at runtime, not during build
2. **Added retry logic**: The database initialization will retry up to 10 times with 5-second intervals
3. **Added graceful error handling**: The application will continue even if database initialization fails

## Changes Made

### 1. Updated `package.json`
- Removed database initialization from `build` script
- Updated `start` script to use new flexible startup process
- Added `start:no-db` option to skip database initialization

### 2. Enhanced `scripts/init-db.ts`
- Added environment variable validation
- Added retry logic with exponential backoff
- Added graceful error handling
- Added connection timeout

### 3. Created `start.js`
- Flexible startup script that handles database initialization
- Can skip database initialization with `SKIP_DB_INIT=true`
- Continues even if database initialization fails

## Deployment to Coolify

### Option 1: Standard Deployment (Recommended)
1. Ensure your database service is running and accessible
2. Set the following environment variables in Coolify:
   ```env
   MYSQL_HOST=your_mysql_host
   MYSQL_PORT=3306
   MYSQL_USER=your_mysql_user
   MYSQL_PASSWORD=your_mysql_password
   MYSQL_DATABASE=your_database_name
   NODE_ENV=production
   ```
3. Deploy normally - the app will initialize the database at startup

### Option 2: Skip Database Initialization
If you want to manage the database separately:
1. Set environment variable: `SKIP_DB_INIT=true`
2. Manually run database initialization: `pnpm run db:init`

## Environment Variables

Required for database functionality:
- `MYSQL_HOST` - Database host
- `MYSQL_PORT` - Database port (default: 3306)
- `MYSQL_USER` - Database username  
- `MYSQL_PASSWORD` - Database password
- `MYSQL_DATABASE` - Database name

Optional:
- `SKIP_DB_INIT` - Set to `true` to skip automatic database initialization
- `NODE_ENV` - Environment (production/development)

## Manual Database Setup

If you prefer to set up the database manually:

```bash
# Initialize database only
pnpm run db:init

# Start application without database initialization
pnpm run start:no-db
```

## Troubleshooting

### Build still fails
- Ensure you're using the latest version of the code
- Check that the `build` script in `package.json` only contains `next build`

### Database connection issues
- Verify database environment variables are set correctly
- Ensure database is accessible from the application
- Check database credentials and permissions
- The app will retry connection 10 times before giving up

### Application won't start
- Check logs for specific error messages
- Verify all required environment variables are set
- Try using `start:no-db` to bypass database initialization

## Testing Locally

1. Set up local database or use database service
2. Copy environment variables from Coolify
3. Run: `pnpm install && pnpm run build && pnpm start`

The deployment should now work successfully in Coolify! 🚀 