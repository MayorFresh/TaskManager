const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/database');
require('dotenv').config();

// Middleware

app.use(express.json());


// routes
app.get('/test', (req, res) => {
    res.send("Landing Page for Task Manager App");
})

app.use('/api/v1/tasks', tasks);


// server port

// app.listen (port, () => {
//     console.log("Server is listening on Port " + port);
// })

/* Setting up the server in such a way that
    it connects to the database first before launching
    the server.
    Therefore, if there is no network, it won't connect.
*/
const port = 4000;
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
