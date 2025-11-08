# Lost and Found System - Setup Guide

## ✅ What's Already Configured

The application has been successfully imported and configured to run in the Replit environment:

- ✅ Frontend runs on port 5000
- ✅ Backend runs on port 3001
- ✅ Environment variables configured
- ✅ All API endpoints updated to use centralized configuration
- ✅ Deployment configured for VM target
- ✅ CORS properly configured for Replit

## 🔧 Current Status

The application is **running successfully** and you can:
- View the homepage with Sign-up and Log-in options
- Navigate through the Lost and Found interface

## ⚠️ Important: MongoDB Configuration

**Current Issue**: The MongoDB connection string in the backend uses a hardcoded cluster address (`cluster0.6kk18.mongodb.net`) that may not match your MongoDB Atlas credentials.

### Option 1: Update MongoDB Cluster (Recommended)
If you have a different MongoDB cluster, you can set the full connection string:
1. Go to Replit Secrets
2. Add a new secret: `MONGODB_URI`
3. Value: Your full MongoDB connection string, for example:
   ```
   mongodb+srv://username:password@your-cluster.mongodb.net/database-name?retryWrites=true&w=majority
   ```

### Option 2: Use the Original Cluster
If the provided credentials (`MONGO_DB_USER`, `MONGO_DB_PASSWORD`, `MONGO_DB_DATABASE`) are for the cluster `cluster0.6kk18.mongodb.net`, then no changes are needed.

### Option 3: Use Replit's PostgreSQL Instead
If you prefer to use Replit's built-in PostgreSQL database instead of MongoDB, you would need to:
1. Migrate the MongoDB schemas to PostgreSQL
2. Update the backend to use PostgreSQL instead of Mongoose
3. This would require significant code changes

## 🚀 Next Steps

1. **Test User Registration**: Try creating a new account via the Sign-up page
2. **Test Login**: Log in with your credentials
3. **Post Items**: Try posting lost/found items (requires AWS S3 configuration for images)
4. **Configure AWS S3** (Optional): If you want image uploads to work:
   - Set up AWS S3 bucket
   - Add AWS credentials to Replit Secrets

## 📝 Environment Variables

Currently configured secrets:
- `MONGO_DB_USER` - MongoDB username
- `MONGO_DB_PASSWORD` - MongoDB password
- `MONGO_DB_DATABASE` - Database name
- `BACKEND_PORT` - Backend port (default: 3001)

Optional secrets you might want to add:
- `MONGODB_URI` - Full MongoDB connection string (overrides individual credentials)
- `AWS_ACCESS_KEY_ID` - For S3 image uploads
- `AWS_SECRET_ACCESS_KEY` - For S3 image uploads
- `MAILGUN_API_KEY` - For email notifications
- `MAILGUN_DOMAIN` - For email notifications

## 🛠️ Project Structure

```
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── Components/  # React components
│   │   ├── config.js    # API configuration (auto-detects backend URL)
│   │   └── ...
│   └── package.json
├── backend/           # Express.js backend API
│   ├── routes/        # API routes
│   ├── models/        # MongoDB models
│   ├── server.js      # Main server file
│   └── package.json
├── package.json       # Root package.json
└── replit.md         # Project documentation
```

## 🔍 Troubleshooting

### Frontend not loading
- Check that the workflow is running
- Verify port 5000 is accessible
- Check browser console for errors

### Backend errors
- Verify MongoDB connection string is correct
- Check that environment variables are set in Replit Secrets
- Review backend logs in the console

### CORS errors
- The backend is configured to accept requests from Replit domains
- If you see CORS errors, check the backend/server.js CORS configuration

## 📚 Technologies Used

- **Frontend**: React 17, React Router, Bootstrap, Axios
- **Backend**: Express.js, Node.js 20
- **Database**: MongoDB (Mongoose ODM)
- **Storage**: AWS S3 (for images)
- **Authentication**: Passport.js with JWT
- **Email**: Nodemailer with Mailgun

## 🎯 Features

- User registration and authentication
- Post lost items with descriptions and images
- Post found items
- Browse lost and found items
- Contact item owners
- Email notifications
- AWS S3 image storage
