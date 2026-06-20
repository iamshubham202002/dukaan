const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('thanks to shubham Connected to MongoDB'))
  .catch((err) => console.log(err));

// Base Route
app.get('/', (req, res) => {
    res.send('API is running');
});

// Routes Definition
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});