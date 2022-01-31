const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
    {
        userId: { type: String, required:true },
        products: [
            {
                productId: {
                    type: String, 
                },
                quantity: {
                    type: Number, 
                    default: 1, 
                },

            },
        ],
        totalAmount: {type: Number, required: true },
        shipping: { type: Object, required: true },
        shippingStatus: {type: String, default: "pending"},
    },
    { timestamps: true }
);

module.exports = mongoose.model('Order', OrderSchema);