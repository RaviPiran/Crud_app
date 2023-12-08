//DATABASE CONNECT
require('dotenv').config();

//When you use require in your code, you're essentially importing the functionality provided by another JavaScript file (module) into the current file. This allows you to modularize your code, making it easier to manage and organize.
//By using dotenv and a .env file, you can keep sensitive information separate from your codebase and easily manage different configurations for development, testing, and production environments.
//it is method for config it is connect with .env file in this method

const express = require('express');

//Express.js is a web application framework for Node.js. It simplifies the process of building web applications and APIs by providing a set of features and tools. These include routing, middleware support, template engines, and more.

const mongoose = require('mongoose');

//Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a higher-level abstraction for interacting with MongoDB, making it easier to define and work with data models.
//After importing Mongoose, you typically use it to connect to a MongoDB database, define data models (schemas), and perform operations such as creating, reading, updating, and deleting documents in the database.


const mongoString = process.env.DATABASE_URL;
//DATABASE_URL is the name of the environment variable being accessed. Environment variables are typically used to store configuration information for an application.
//process is a global object in Node.js that provides information about, and control over, the current Node.js process.

mongoose.connect(mongoString);
const database = mongoose.connection;
//This line initiates a connection to a MongoDB database using the mongoose.connect method.
//mongoString is assumed to be the connection string that contains information about the MongoDB server and database to which the application is connecting.

//This line creates a variable named database and assigns it the value of mongoose.connection.
//The mongoose.connection object represents the connection to the MongoDB server.
//This database object can be used to listen for events related to the MongoDB connection, such as connection success, connection error, or disconnection.



database.on('error', (error) => {
    console.log(error)
})

//This line of code is handling the 'error' event that might occur during the connection to a MongoDB database using Mongoose
//.on('error', (error) => { is setting up an event listener for the 'error' event on the database object.
//The error event is emitted when there's an issue with the MongoDB connection. This could be due to various reasons, such as an incorrect connection string, the MongoDB server being unreachable, or authentication failures.


database.once('connected', () => {
    console.log('Database Connected');
})

//.once('connected', () => { is setting up an event listener for the 'connected' event on the database object.
//
const app = express();

//creating an instance of an Express.js application
//Now, the app variable represents your Express application, and you can use it to define routes, set up middleware, handle HTTP requests, and more.


app.use(express.json());

//setting up middleware in an Express.js application to parse incoming requests with JSON payloads
//express.json() is a built-in middleware provided by Express.js.
//app.use() is used to mount middleware in the Express application.


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

//app.listen() is a method provided by Express.js to start the HTTP server and make it listen for incoming requests.
//When you run your Node.js application, this callback will be invoked once the server is up and running.


// const routes = require('./routes/routes');
//importing a module that defines routes for an Express.js application.
//require('./routes/routes'): This uses the require function in Node.js to import the module located at the relative path ./routes/routes.

// app.use('/api', routes)
//app.use() is a method in Express.js used to mount middleware or sub-apps on a specified path.
///api is the path prefix, meaning that the routes defined in the routes module will only be applied if the URL starts with '/api'.

const routes = require('./routes/empolyeeroutes');
app.use('/api', routes)
