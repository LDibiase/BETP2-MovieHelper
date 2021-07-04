const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const connection = require('./connections')
let ObjectId = require('mongodb').ObjectId;

   async function getUsuarios() {
       const clientMongo = await connection.getConnection();
       const usuarios = await clientMongo
       .db("moviehelper")
       .collection("usuarios")
       .find()
       .toArray();
       return usuarios;
    }
    async function getUsuarioPorId(email) {
      const clientMongo = await connection.getConnection();
      const user = await clientMongo
      .db("moviehelper")
      .collection("usuarios")
      .findOne()
      return user;
    }
async function getUsuarioPorContrasenia(email, pass) {
  const clientMongo = await connection.getConnection();
  const user = await clientMongo
    .db("moviehelper")
    .collection("usuarios")
    .find({ email: new ObjectId(email), password: new ObjectId(pass) });

  return user;
}

async function addUser(user){
  const connectiondb = await connection.getConnection();
  //user.password = bcrypt.hashSync(user.password, 8);

  const result = await connectiondb.db('moviehelper')
                          .collection('usuarios')
                          .insertOne(user);
  return result;
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
module.exports = {User, getUsuarios, getUsuarioPorId, getUsuarioPorContrasenia, addUser};