require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models/');
const billingRoutes = require('./routes/billingRoutes');
const tiffinRoutes = require('./routes/tiffinRoutes');
const userRoutes = require('./routes/userRoutes');
const advancePaymentRoutes = require('./routes/paymentsRoutes'); 
const Razorpay = require('razorpay');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.json());

app.use('/api/advance-payments', advancePaymentRoutes);
app.use('/api/billings', billingRoutes);
app.use('/api/tiffins', tiffinRoutes);
app.use('/api/users', userRoutes);


const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  
  app.post('/create-order', async (req, res) => {
    const { amount, currency } = req.body; // Receive amount and currency from the client
  
    const options = {
      amount: amount * 100, // Amount in the smallest currency unit (e.g., paise for INR)
      currency: currency || "INR",
      receipt: `receipt_${Math.floor(Math.random() * 10000)}`,
    };
  
    try {
      const order = await razorpay.orders.create(options); // Create order using Razorpay SDK
      res.status(200).json({ success: true, orderId: order.id, amount: options.amount });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  });
  
const startServer = async () => {
    try {
        await sequelize.sync();
        console.log('Database connected and synced successfully.');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

startServer();
