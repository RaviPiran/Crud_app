const mongoose = require('mongoose');

//This line imports the Mongoose library into your Node.js application. Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js, providing a higher-level abstraction for working with MongoDB.

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
})

//01.This line creates a new Mongoose schema using the mongoose.Schema constructor. A schema in Mongoose defines the structure of the documents (records) that will be stored in a MongoDB collection.
//02.name:It specifies that name is a required field (cannot be empty or undefined), and its type must be a string.
//03.age:his part of the schema defines the age property. Similar to name, it specifies that age is a required field, and its type must be a number.


module.exports = mongoose.model('Data', dataSchema)

//01.DataModel:DataModel is the Mongoose model you exported, and you can use it to create, read, update, or delete documents in the 'Data' collection in your MongoDB database.
//02.mongoose.model('Data', dataSchema): This part of the line creates a Mongoose model named 'Data'. The first argument ('Data') is the singular name of the collection your model is for, and the second argument (dataSchema) is the schema you want to use for documents in that collection.
//03.module.exports object is a special object in Node.js that determines what will be returned when another file requires or imports the module. In this case, when another file requires this module, it will get access to the Mongoose model named 'Data' that is based on the specified schema.




