const mongoose = require('mongoose')
require('dotenv').config()
const MONGODB_URL = process.env.MONGODB_URL


const DBConnection = ()=>{
    mongoose
    .connect(MONGODB_URL)
    .then(()=>console.log("Database Connected..!!"))
    .catch((err)=>console.error("Database Not Connected..!!", err))
}

module.exports = DBConnection