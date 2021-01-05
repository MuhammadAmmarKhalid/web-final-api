const mongoose = require('mongoose');

const URI = "mongodb://ammar1:ammar1@cluster0-shard-00-00.ue8tr.mongodb.net:27017,cluster0-shard-00-01.ue8tr.mongodb.net:27017,cluster0-shard-00-02.ue8tr.mongodb.net:27017/finallab66?ssl=true&replicaSet=atlas-9qkwci-shard-0&authSource=admin&retryWrites=true&w=majority";
const connectDB = async() => {
    await mongoose.connect(URI, {
        useUnifiedTopology:true,
        useNewUrlParser:true
    });
    console.log('db connected');
}

module.exports = connectDB;