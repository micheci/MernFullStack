const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const app=express();
const connectDB = require("./config/database");



app.use(express.json())//req body
app.use(cors())

require("dotenv").config({ path: "./config/.env" });

const PORT=process.env.PORT

//Routes
const router=require('./routes/tasks')
app.use('/api',router)


//Connect To Database
connectDB();


app.listen(PORT,()=>{
    console.log(`port connected ${PORT}`)
})