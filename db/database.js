const mongoose = require('mongoose')


const connectDB = (url) => {    
    return mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true})

}

module.exports =connectDB
    
