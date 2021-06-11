const MongoClient = require('mongodb').MongoClient;
//lo pongo hardcodeado por ahora cuando pullee el .env va ahi
const url = 'mongodb+srv://moviehelper: moviehelper123@cluster0.hegwv.mongodb.net/moviehelper?retryWrites=true&w=majority'

const client = new MongoClient(url)

let instance = null;

async function getConnection() {
    if (instance == null) {
        try {
            instance = await client.connect();
        } catch (err) {
            console.log(err.message)
        }
    }
}
module.exports = {getConnection};