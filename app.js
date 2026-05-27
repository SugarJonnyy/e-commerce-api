require('dotenv').config()
require('express-async-errors')

//express
const express = require('express')

//database
const connectDB = require('./db/connect')


//authRouter 
const authRoute = require('./routes/authRoute')

// middlewares
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const morgan = require('morgan')

const app = express()

app.use(morgan('tiny'))
app.use(express.json())

app.use('/', (req, res)=>{
    res.send('e-commerce api')
})

app.use('/api/v1/auth', authRoute)

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