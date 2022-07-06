MongoDB:
MongoDB, a NoSQL database that stores data in JSON-like documents with flexible schemas

Make a project add its users and api then create its cluster or db.
Click connect btn on cluster select connect with application.
Copy  connection string
Replace <password> with the password for the admin user. Ensure any option params are URL encoded.
npm install mongodb
const {MongoCient}=require('mongodb') 