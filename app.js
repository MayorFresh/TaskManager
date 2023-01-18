const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/database');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');
const path = require('path');
const chalk = require('chalk')


// Middleware
app.use(express.json());

// Serving the frontend static files
const pathToSource = path.join(__dirname, "public")
app.use(express.static(pathToSource));



// landing page
app.get('/', (req, res) => {
    res.sendFile(pathToSource + "/index.html")
})


app.use('/api/v1/tasks', tasks);

// Error handler for invalid route
app.use(notFound); 
app.use(errorHandler);


// server port
const port = process.env.PORT;
app.listen (port, () => {
    console.log(chalk.green("Server is listening on Port " + port));
})