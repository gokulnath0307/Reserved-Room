require('dotenv').config()
const express=require('express')
const bodyParser=require('body-parser')
const { MongoClient } = require('mongodb');
const mongoose=require('mongoose');
const dbConfig=require('./Config/Config')
const cors=require('cors') 
const app=express()
const BookingRoute=require('./Routes/BookingForm/BookingRoute');
const DayCardRoute=require('./Routes/DayCard/DayCardRoute')
const AdminRoute=require('./Routes/Admin/AdminRoute')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())


mongoose.Promise = global.Promise

mongoose.connect(dbConfig.url,{useUnifiedTopology:true,useNewUrlParser:true})
.then(()=>{
    console.log('Connected to the database successfully')
}).catch((err)=>{
    console.log(err)
    process.exit()
})

// const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.nii5p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
 
//   client.close();
//   console.log(collection)
// });


app.use('/BookingForm',BookingRoute)

app.use('/DayCard',DayCardRoute)

app.use('/Admin',AdminRoute)

app.listen(5000,()=>{
     console.log('Server is running at port 5000')
 })