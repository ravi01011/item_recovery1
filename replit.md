# Lost and Found System

## Overview
A full-stack web application that helps users report lost items and find items that others have found. The system includes authentication, image uploads to AWS S3, and email notifications.

## Project Structure
- **frontend/**: React application (runs on port 5000)
- **backend/**: Express.js API server (runs on port 3001)

## Tech Stack
- **Frontend**: React 17, React Router, Bootstrap, Axios
- **Backend**: Express.js, Passport.js (authentication), Mongoose (MongoDB ODM)
- **Database**: MongoDB Atlas
- **Storage**: AWS S3 for image uploads
- **Email**: Nodemailer with Mailgun

## Environment Variables Required
The backend requires the following environment variables:
- `MONGO_DB_USER`: MongoDB Atlas username
- `MONGO_DB_PASSWORD`: MongoDB Atlas password
- `MONGO_DB_DATABASE`: MongoDB database name
- `PORT`: Backend server port (default: 3001)

## Recent Changes
- **2025-11-08**: Initial import and Replit setup
  - Restructured project from nested directories to clean frontend/backend structure
  - Configured backend to run on port 3001
  - Configured frontend to run on port 5000 with OpenSSL legacy provider for Node 20 compatibility
  - Updated CORS settings for Replit environment with flexible origin detection
  - Configured MongoDB connection with environment variables
  - Created frontend/src/config.js for centralized API and S3 configuration
  - Updated all frontend components to use centralized config instead of hardcoded URLs
  - Configured deployment for VM target to maintain stateful connections
  - Application successfully running with frontend at port 5000 and backend at port 3001

## Architecture
- Frontend makes API calls to backend
- Backend connects to MongoDB Atlas for data storage
- Images are uploaded to AWS S3
- User authentication via Passport.js with JWT tokens
- Session management with cookies
