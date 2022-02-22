const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

// Middleware

app.use(express.json());


// routes
app.get('/test', (req, res) => {
    res.send("Landing Page for Task Manager App");
})

app.use('/api/v1/tasks', tasks);


// server port
const port = 4000;
app.listen (port, () => {
    console.log("Server is listening on Port " + port);
})