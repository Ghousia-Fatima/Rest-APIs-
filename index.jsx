// Requiring Modules

const express = require('express')
const noteRouter = require('./Routes/notesRoute')
const DBConnection = require ('./DBConnections')

const app = express();

// Environment
require('dotenv').config()
const PORT = process.env.PORT
const MONGODB_URL = process.env.MONGODB_URL

// Middleware to access JSON Data
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Database connection
DBConnection()

// Routing Middleware
app.use('/api/notes', noteRouter)
// app.use('/api/users', userRouter)


//Home Route

app.get('/', (req, res)=>{
    res.json("Message: Express Server Reply")
})

// Serve the Application
app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})