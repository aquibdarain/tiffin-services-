
module.exports = (sequelize,DataTypes)=>{
    const AdvancePayment = sequelize.define('AdvancePayment', {
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        advanceAmount: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        paymentDate: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        daysOff: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        amountDeducted: {
          type: DataTypes.FLOAT,
          allowNull: true,
        },
        balanceAmount: {
          type: DataTypes.FLOAT,
          allowNull: true,
        },
      }, {
        timestamps: true,
      });
return AdvancePayment; 
}


