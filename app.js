require('dotenv').config()

//express
const express = require('express')

//database
const connectDB = require('./db/connect')
const app = express()


const port = process.env.PORT || 5000
const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=> console.log(`server is listening to the ${port}`))
    } catch (error) {
        console.log(error);
    }

}

start()