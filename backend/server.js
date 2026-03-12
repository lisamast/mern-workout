// server.js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import workoutRoutes from './src/routes/workoutRoutes.js';

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// CORS toestaan voor frontend
app.use(cors({
    origin: 'http://localhost:5173'
}));

// Routes
app.use('/api/workouts', workoutRoutes);

// Verbind met MongoDB en start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Verbonden met MongoDB');
    
    // Start server ALLEEN als database gelukt is
    app.listen(PORT, () => {
      console.log(`Server draait op http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database verbinding mislukt:', error.message);
  });