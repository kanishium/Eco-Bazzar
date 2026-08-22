const app = require("./src/app")
const connnectDB = require("./src/db/db")
const express = require("express")
const cors = require("cors")
const ProductModel = require("./src/models/product.model")
const dotenv = require("dotenv")


dotenv.config()
connnectDB()
app.use(cors())
app.use(express.json())
app.get("/", (req, res) => {
    res.send("hello server this side")
})

// GET all products
app.get("/products", async (req, res) => {
    try {
        const products = await ProductModel.find()
        res.status(200).json(products)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "error while fetching products" })
    }
})

// GET single product by ID
app.get("/products/:id", async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.id)
        if (!product) {
            return res.status(404).json({ message: "Product not found" })
        }
        res.status(200).json(product)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "error while fetching product" })
    }
})


app.post("/add-product", async (req, res) => {
    console.log(req.body)
    try {
        const { image, title, category, quantity, offer, ratings, price } = req.body
        const product = new ProductModel({
            image,
            title,
            category,
            quantity,
            offer,
            ratings,
            price
        })
        await product.save()
        res.status(200).json({ message: "product added successfully" })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "error while adding product" })
    }
})

app.listen(3000, () => {
    console.log("the server is running at port 3000");
})