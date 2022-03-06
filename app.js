const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/database');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');
const path = require('path');

// Middleware
app.use(express.json());
// Serving static files

const pathToSource = path.join(__dirname, "public")
app.use(express.static(pathToSource));



// routes
app.get('/', (req, res) => {
    // res.send("Landing Page for Task Manager App");
    res.sendFile(pathToSource + "/index.html")
})


app.use('/api/v1/tasks', tasks);
// Error handler for invalid route
app.use(notFound); 
app.use(errorHandler);



/* Setting up the server in such a way that
    it connects to the database first before launching
    the server.
    Therefore, if there is no network, it won't connect.
*/
const port = process.env.PORT;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_CONNECT)
        app.listen (port, () => {
        console.log("Server is listening on Port " + port);
        })
    } catch (error) {
        console.log(error)
    }
}

start();


// server port

// app.listen (port, () => {
//     console.log("Server is listening on Port " + port);
// })