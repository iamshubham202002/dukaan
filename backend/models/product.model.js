const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a product name']
    },
    description: {
        type: String,
        required: [true, 'Please add a product description']
    },
    price: {
        type: Number,
        required: [true, 'Please add a product price'],
        min: [0, 'Price must be a positive number']
    },
    imageUrl: {
        type: String,
        required: [true, 'Please add a product image URL']
    },
    category: {
        type: String,
        required: [true, 'Please add a product category']
    },
    stock: {
        type: Number,
        default: 0,
    },
    vendorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor',
        required: [true, 'Please add a vendor ID']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);