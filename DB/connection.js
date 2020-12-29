const mongoose = require('mongoose');

const URI = "mongodb://Chawla:chawla123@cluster0-shard-00-00.8bgku.mongodb.net:27017,cluster0-shard-00-01.8bgku.mongodb.net:27017,cluster0-shard-00-02.8bgku.mongodb.net:27017/ProductDb?ssl=true&replicaSet=atlas-d37rx7-shard-0&authSource=admin&retryWrites=true&w=majority";
const connectDB = async() => {
    await mongoose.connect(URI, {
        useUnifiedTopology:true,
        useNewUrlParser:true
    });
    console.log('db connected');
}

module.exports = connectDB;