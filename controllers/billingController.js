// controllers/billingController.js
const { TiffinRecord, Billing } = require('../models');
const { Op } = require('sequelize'); // Make sure to import Op

const generateBill = async (req, res) => {
    try {
      const { userId, startDate, endDate } = req.body;
  
      // Fetch tiffin records for the user within the date range
      const tiffinRecords = await TiffinRecord.findAll({
        where: {
          userId,
          date: {
            [Op.between]: [startDate, endDate]
          }
        }
      });
  
      // Calculate total tiffins, veg, and non-veg counts
      let totalVeg = 0;
      let totalNonVeg = 0;
      tiffinRecords.forEach(record => {
        totalVeg += record.vegCount;
        totalNonVeg += record.nonVegCount;
      });
      const totalTiffins = totalVeg + totalNonVeg;
      const totalAmount = (totalVeg * 90) + (totalNonVeg * 150);
  
      // Create the billing record
      const billing = await Billing.create({
        userId,
        totalAmount,
        billingPeriodStart: startDate,
        billingPeriodEnd: endDate
      });

   // Remove 'createdAt' and 'updatedAt' fields before sending response
   const billingResponse = billing.toJSON();
   delete billingResponse.createdAt;
   delete billingResponse.updatedAt;

      // Return the billing details along with tiffin counts
      res.status(200).json({
        billing: billingResponse,
        totalTiffins,
        totalVeg,
        totalNonVeg,
      });
    } catch (error) {
      console.error('Error generating bill:', error.stack); // Log detailed error
      res.status(500).json({ error: 'An error occurred while generating the bill.' });
    }
  };
  

  module.exports= {generateBill};