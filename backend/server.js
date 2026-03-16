import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import workoutRoutes from './src/routes/workoutRoutes.js';
import authRoutes from './src/routes/authRoutes.js'; // Nieuw!

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// CORS toestaan voor frontend
app.use(cors({
    origin: 'http://localhost:5173'
}));

// Routes
app.use('/api/workouts', workoutRoutes);
app.use('/api/auth', authRoutes); // Nieuw!

// Database verbinden en server starten
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Database verbonden & server draait');
        });
    })
    .catch((err) => console.error(err));
