const MongoClient = require('mongodb').MongoClient;
const url = require('dotenv').config();
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