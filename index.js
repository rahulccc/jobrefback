const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const referralRoutes = require('./routes/referrals');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/referrals', referralRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('✅ MongoDB Connected'))
    .catch((err) => console.error("❌ MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
