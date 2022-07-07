const express=require('express')
const {MongoClient}=require('mongodb')
const Mongouri='mongodb+srv://admin:123@cluster0.kbpqc3o.mongodb.net/?retryWrites=true&w=majority';
const App=express()
const client=new MongoClient(Mongouri)
App.get('/',(req,res)=>{
    res.end("server")
})
App.get('/api/users',async(req,res)=>{
    console.log("gg")
    try{
        await client.connect() 
        const database=client.db('MyDB')
        const collection=database.collection('users')
        const query=await collection.insertOne({
            name:'Francis',
            lastname:'Jones'
        })
        res.status(200).json({nice:'nice'})
    }
    catch(error){
        throw error
    }
    finally{
        await client.close()
        console.log("all is done")
    }
    // MongoClient.connect(Mongouri,(err,client)=>{
    //     if(err)
    //     {
    //         throw err;
    //     }
    //     console.log('connected to db')
    // })
})
App.listen(3001)