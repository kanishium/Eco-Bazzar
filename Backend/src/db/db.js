const mongoose = require("mongoose")

const connnectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("the database is connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connnectDB