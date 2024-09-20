const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
if (process.env.NODE_ENV === 'production') {
  require('dotenv').config({ path: '.env' });
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.local' });
}

const userAuthRouter = require('./router/v1/user/userAuthRouter');
const userProfileRouter = require('./router/v1/user/userProfileRouter');

const app = express();
app.use(
  cors({
    origin: process.env.VITE_API_BASE_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
  }),
);
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((error) => {
    console.error(`MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  });
// User routes
app.use('/api/user/auth', userAuthRouter);
app.use('/api/user/profile', userProfileRouter);

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {});
