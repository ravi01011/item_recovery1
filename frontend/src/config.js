// API Configuration for Lost and Found System
// Automatically detects the backend URL based on environment

const getBackendURL = () => {
  // Allow override via environment variable
  if (process.env.REACT_APP_BACKEND_URL) {
    return process.env.REACT_APP_BACKEND_URL;
  }
  
  // In browser environment, detect based on hostname
  if (typeof window !== 'undefined') {
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    
    // For Replit development environment, backend runs on port 3001
    if ((hostname.includes('replit.') || hostname.includes('.repl.co')) && hostname.includes('localhost')) {
      return `${protocol}//${hostname.replace(':5000', '')}:3001`;
    }
    // For Replit production deployment, backend and frontend are on same origin
    if (hostname.includes('replit.') || hostname.includes('.repl.co')) {
      return `${protocol}//${hostname}`;
    }
  }
  // Default to localhost for local development
  return 'http://localhost:3001';
};

export const API_BASE_URL = getBackendURL();
export const S3_BASE_URL = 'https://lost-and-found-system.s3.amazonaws.com';
