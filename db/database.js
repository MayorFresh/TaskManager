const mongoose = require('mongoose')
const chalk = require('chalk')

const connectionURL = "mongodb://127.0.0.1:27017/taskmanager"

mongoose.connect(connectionURL, {
    useNewURLParser: true, useUnifiedTopology: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true
}, (error, connect) => {
    if(error){
        console.log(chalk.redBright(`Could not connect to the database`))
    }
   
    console.log(chalk.bgMagenta.white(`Successfully Connected to the database`))
   
})

connectDB = mongoose.connection
    
