require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
// URL = 'mongodb+srv://moviehelper:moviehelper123@cluster0.hegwv.mongodb.net/moviehelper?retryWrites=true&w=majority'

const client = new MongoClient(process.env.URL);

let instance = null;

async function getConnection(){
    if(instance == null){
        try{
            instance = await client.connect();
        } catch(err){
            console.log(err.message);
        }
    }
    return instance;
}

module.exports = {getConnection};