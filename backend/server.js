// using express
import express from 'express';
// for accessing env variables 
import dotenv from 'dotenv'
dotenv.config()

// importing routes
import userRouter from './routes/userRoute.js'

// importing cookie parser 
import cookieParser from 'cookie-parser';

// importing error handling middlewares
import { notFound,errorHandler } from './middlewares/errorMiddleware.js';

// connecting database
import connectDB from './config/db.js';
connectDB();

// adding port
const port = process.env.PORT||5000;

// creating app 
const app=express()

// using cookie parser
app.use(cookieParser())
// parsing json data
app.use(express.json())
// parsing urlencoded data i.e. form data
app.use(express.urlencoded({extended:true}))


// going to route: /api/users
app.use('/api/users',userRouter)


// going to home page
app.get('/',(req,res)=>{
    res.send("server's home page")
})


// error handling
app.use(notFound)
app.use(errorHandler)


// listening to port
app.listen(port,()=>{
    console.log("server is running");
})



// routes
// post api/users       register
// post api/users/auth  authentication(login)
// post api/users/logout    (logout)
// get api/users/profile    (protected route to fetch profile)
// put api/users/profile    update route (protected)
