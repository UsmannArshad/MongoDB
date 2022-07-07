//POST WITH MONGOOSE
const express=require('express')
const App=express()
const mongoose=require('mongoose')
const Mongouri='mongodb+srv://admin:123@cluster0.kbpqc3o.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(Mongouri)
const bodyParser = require('body-parser');
App.use(bodyParser.json());
const carSchema=mongoose.Schema({
    brand: String,
    model:String,
    year: Number,
    avail: Boolean
})
const car=mongoose.model('car',carSchema);
App.post('/api/cars',(req,res)=>{
    const addCar=new car({
        brand:req.body.brand,
        model:req.body.model,
        year: req.body.year,
        avail: req.body.avail
    })
    addCar.save((err,doc)=>{
        if(err)
        {
            return console.log(err)
        }
        res.sendStatus(200).json(doc)
    })
})
App.get('/api/getCars',(req,res)=>{
    car.find((err,doc)=>{
        if(err)
        {
            console.log(err)   
        }
        res.json(doc)
    })
})
App.post('/api/removeCars',(req,res)=>{
    const brand=req.body.brand
    car.findOneAndDelete({brand:brand},(err,doc)=>{
        if(err){return console.log(err)}
        res.json(doc)
    })
})
App.listen(3001)