const mongoose = require('mongoose');

const URI = "mongodb://gym:gym@cluster0-shard-00-00.boges.mongodb.net:27017,cluster0-shard-00-01.boges.mongodb.net:27017,cluster0-shard-00-02.boges.mongodb.net:27017/gym?ssl=true&replicaSet=atlas-f76mim-shard-0&authSource=admin&retryWrites=true&w=majority";


const connectDB = async() => {
    await mongoose.connect(URI, {
        useUnifiedTopology:true,
        useNewUrlParser:true
    });
    console.log('db connected');
}

module.exports = connectDB;