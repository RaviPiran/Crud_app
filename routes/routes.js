
const express = require('express');

const router = express.Router()
//Router: express.Router() creates a new router object. A router in Express is a middleware that can be used for handling routes.
//Usage: You can use this router object to define routes and their corresponding handlers. For example, you might define routes for different HTTP methods (GET, POST, etc.) and specify functions to be executed when those routes are accessed.

module.exports = router;
//mapping a router and all logic that's required to map /user


//Post Method
// router.post('/post', (req, res) => {
//     res.send('Post API')
// })

//Route Definition: The code router.post('/post', (req, res) => {...}) is defining a route for handling HTTP POST requests to the '/post' endpoint.
//HTTP Method: router.post specifies that this route is intended to handle HTTP POST requests. In RESTful API terms, this typically corresponds to creating or submitting data to the server.

//Get all Method
// router.get('/getAll', (req, res) => {
//     res.send('Get All API')
// })

//Route Definition: The code router.get('/getAll', (req, res) => {...}) is defining a route for handling HTTP GET requests to the '/getAll' endpoint.
//HTTP Method: router.get specifies that this route is intended to handle HTTP GET requests. In RESTful API terms, this typically corresponds to retrieving or fetching data from the server.



//Get by ID Method
// router.get('/getOne/:id', (req, res) => {
//     res.send('Get by ID API')
// })

//Route Definition: The code router.get('/getOne/:id', (req, res) => {...}) is defining a route for handling HTTP GET requests to the '/getOne/:id' endpoint.
//HTTP Method: router.get specifies that this route is intended to handle HTTP GET requests. In RESTful API terms, this typically corresponds to retrieving or fetching data from the server.


//Update by ID Method
// router.patch('/update/:id', (req, res) => {
//     res.send('Update by ID API')
// })

//Route Definition: The code router.patch('/update/:id', (req, res) => {...}) is defining a route for handling HTTP PATCH requests to the '/update/:id' endpoint.
//HTTP Method: router.patch specifies that this route is intended to handle HTTP PATCH requests. In RESTful API terms, the PATCH method is often used for making partial updates to a resource.




//Delete by ID Method
// router.delete('/delete/:id', (req, res) => {
//     res.send('Delete by ID API')
// })

//Route Definition: The code router.delete('/delete/:id', (req, res) => {...}) is defining a route for handling HTTP DELETE requests to the '/delete/:id' endpoint.
//HTTP Method: router.delete specifies that this route is intended to handle HTTP DELETE requests. In RESTful API terms, the DELETE method is used for deleting a resource.




//Route import
// const Model = require('../model/model');

// router.post('/post', async (req, res) => {
//     const data = new Model({
//         name: req.body.name,
//         age: req.body.age
//     })

//     try {
//         const dataToSave = await data.save();
//         res.status(200).json(dataToSave)
//     }
//     catch (error) {
//         res.status(400).json({message: error.message})
//     }
// })

//01.This sets up a route for handling HTTP POST requests at the '/post' endpoint. The route is defined using the Express.js router.
//02.It creates a new instance of the imported model (presumably a schema for a database) with data extracted from the request body. The request body is expected to have 'name' and 'age' properties.
//03.Save Data to Database:It attempts to save the created data object to the database. If successful, it responds with a status code of 200 (OK) and sends the saved data as a JSON response.
//04.Handle Errors:If an error occurs during the data saving process, it catches the error and responds with a status code of 400 (Bad Request), along with a JSON object containing an error message.



router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//01.This sets up a route for handling HTTP GET requests at the '/getAll' endpoint. The route is defined using the Express.js router.
//02.Retrieve Data from Database:It attempts to retrieve data from the database using the Model.find() method. This method is commonly used in MongoDB and Mongoose to find all documents in a collection. The retrieved data is then sent as a JSON response.
//03.Handle Errors:it catches the error and responds with a status code of 500 (Internal Server Error), along with a JSON object containing an error message.


//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//01.The route is defined using the Express.js router, and it includes a parameter :id in the route path. This parameter is used to specify the unique identifier of the item to be retrieved.
//02.Retrieve Data by ID from Database:Model.findById() method. This method is commonly used in MongoDB and Mongoose to find a document by its unique identifier. The req.params.id extracts the value of the 'id' parameter from the request URL.


//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//01.Extract ID and Updated Data from Request:unique identifier (id) from the request URL parameter and the updated data from the request body. The request body is expected to contain the new information to be applied to the specified item.
//02.Update Data in the Database:Model.findByIdAndUpdate() method to find and update a document in the database based on the provided ID. The options object with { new: true } ensures that the method returns the updated document rather than the original one.
//03.Handle Success:If the update is successful, it sends the updated data as a response.
//04.Errors:404 Error shows




//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//01.Extract ID and Delete Data from Database:Model.findByIdAndDelete() method to find and delete a document in the database based on the provided ID. The deleted data is stored in the data variable.
//02.Handle Success:If the deletion is successful, it sends a response indicating that the document with the specified name has been deleted.
//03.Handle Errors:If an error occurs during the deletion process, it catches the error and responds with a status code of 400 (Bad Request), along with a JSON object containing an error message.







