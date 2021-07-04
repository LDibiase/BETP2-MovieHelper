const connection = require('./connections')
let ObjectId = require('mongodb').ObjectId;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


    // # Obetener todos los usuario
   async function getUsuarios() {
       const clientMongo = await connection.getConnection();
       const usuarios = await clientMongo
       .db("moviehelper")
       .collection("usuarios")
       .find()
       .toArray();
       return usuarios;
    }

    // # Agregar un Usuario
async function addUser(user){
  const connectiondb = await connection.getConnection();
  user.password = bcrypt.hashSync(user.password, 8);

  const result = await connectiondb.db('moviehelper')
                          .collection('usuarios')
                          .insertOne(user);
  return result;
}

   // # Buscar un usuario
async function findUser(email, password){
  const connectiondb = await connection.getConnection();
  const user = await connectiondb.db('moviehelper')
                          .collection('usuarios')
                          .findOne({email:email});
  console.log('Usuario', user);
  if(!user){
      throw new Error('Usuario inexistente');
  }
   const isMatch =  bcrypt.compareSync(password, user.password);
   if(!isMatch){
       throw new Error('Password invalida');
   } 
  return user;
}

async function findUserByEmail(email){
  const connectiondb = await connection.getConnection();
  const user = await connectiondb.db('moviehelper')
                          .collection('usuarios')
                          .findOne({email:email});
  console.log('Usuario', user);
  if(!user){
      throw new Error('Usuario inexistente');
  }
  return user;
}

async function addPelicula(idUsuario, pelicula) {
  const clientmongo = await connection.getConnection();
  const query = { _id: new ObjectId(idUsuario) };
  const newValues = { $push: { "favoritos": pelicula } };
  const result = await clientmongo.db('moviehelper')
                                  .collection('usuarios')
                                  .updateOne(query, newValues);
  return result;
};

async function removePelicula(idUsuario, pelicula) {
  const clientmongo = await connection.getConnection();
  const query = { _id: new ObjectId(idUsuario) };
  const newValues = { $pull: { "favoritos": pelicula } };
  const result = await clientmongo.db('moviehelper')
                                  .collection('usuarios')
                                  .updateOne(query, newValues);
  return result;
};

async function generateJWT(user){
  const token = jwt.sign({_id: user._id, email: user.email}, process.env.SECRET, {expiresIn: '1h'});
  return token;
}

module.exports = {getUsuarios, addUser, findUser, findUserByEmail, generateJWT, addPelicula, removePelicula};