const express=require('express')
const {MongoClient}=require('mongodb')
const Mongouri='mongodb+srv://admin:123@cluster0.kbpqc3o.mongodb.net/?retryWrites=true&w=majority';
const App=express()
App.get('/',(req,res)=>{
    res.end("server")
})
App.get('/api/users',(req,res)=>{
    MongoClient.connect(Mongouri,(err,client)=>{
        if(err)
        {
            throw err;
        }
        console.log('connected to db')
    })
})
App.listen(3001)