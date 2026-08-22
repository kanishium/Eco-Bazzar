const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    image: String,
    title: String,
    category: String,
    quantity: Number,
    offer: String,
    ratings: Number,
    price: Number
})

const ProductModel = mongoose.model("products", productSchema)

module.exports = ProductModel