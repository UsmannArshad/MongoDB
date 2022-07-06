const express=require('express')
const {MongoClient}=require('mongodb')
const Mongouri='mongodb+srv://admin:123@cluster0.kbpqc3o.mongodb.net/?retryWrites=true&w=majority';
const App=express()
App.get('/',(req,res)=>{
    res.end("server")
})
App.listen(3001)