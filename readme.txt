MongoDB:
MongoDB, a NoSQL database that stores data in JSON-like documents with flexible schemas

Make a project add its users and api then create its cluster or db.
Click connect btn on cluster select connect with application.
Copy  connection string
Replace <password> with the password for the admin user. Ensure any option params are URL encoded.
npm install mongodb
const {MongoCient}=require('mongodb')
To check if u r connected with db use:
MongoCient.connect(connectionstring,(err,client)=>{
if(err)
{
    throw err
}
console.log("Connected to db")
}) 
It is not necessary it just tell u wheter ur query is right or there is some mistake.

Add in DB:
Consider that we have btn of add user that when clicked add the user in MongoDB
first we will connect with db
const client=new MongoClient(URL)
client.connect()
Now there is a order 
Project->Cluester->DB->Collection
Then we will access to db if not present it will create new
const DataBase=client.db('MyDB')
then same for Collection
const collection=DataBase.collection('Users')
Now to add data:
const query=await collection.insertOne({
    name:'Francis',
    lastname:'Jones'
})
and in btn onClick function just write axios.get('link of what u write i server file like api/users')

=>Mongoose:
Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.
