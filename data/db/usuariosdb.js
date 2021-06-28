const connection = require('./connections')
let ObjectId = require('mongodb').ObjectId;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

async function getUsuarios() {
    const clientMongo = await connection.getConnection();
    const usuarios = await clientMongo
    .db('moviehelper')
    .collection('usuarios')
    .find()
    .toArray();
    return usuarios;
}

const UserSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  favoritos: {
    type: Array,
    default: [],
  },
});

const User = mongoose.model('User', UserSchema);
module.exports = {User, getUsuarios};
