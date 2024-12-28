const AdvancePayment = require('../models/advancePayments')
// Add new advance payment
exports.addAdvancePayment = async (req, res) => {
    const { amountPaid, paidDate } = req.body;
    try {
        const newPayment = await AdvancePayment.create({
            amountPaid,
            paidDate,
            remainingBalance: amountPaid, // Initially, the remaining balance will be the total amount paid
        });
        res.status(201).json(newPayment);
    } catch (error) {
        console.error('Error adding advance payment:', error);
        res.status(500).json({ error: 'An error occurred while adding the advance payment.' });
    }
};

// Deduct amount from advance payment
exports.deductPayment = async (req, res) => {
    const { id, deductionAmount, deductionDetails } = req.body;
    try {
        const payment = await AdvancePayment.findByPk(id);
        if (!payment) {
            return res.status(404).json({ error: 'Advance payment record not found.' });
        }

        // Update the balance and add deduction details
        const updatedBalance = payment.remainingBalance - deductionAmount;

        await payment.update({
            remainingBalance: updatedBalance,
            deductionAmount,
            deductionDetails,
        });

        res.status(200).json(payment);
    } catch (error) {
        console.error('Error deducting payment:', error);
        res.status(500).json({ error: 'An error occurred while deducting the payment.' });
    }
};
