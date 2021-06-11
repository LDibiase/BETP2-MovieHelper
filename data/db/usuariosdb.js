const connection = require('./connections')
let ObjectId = require('mongodb').ObjectId;

async function getUsuario() {
    const clientMongo = await connection.getConnection();
    const usuarios = clientMongo.db('moviehelper').collection('usuarios').find().toArray();
    return usuarios;
}
// async function getUsuarioId(id) {
//         const clientmongo = await connection.getConnection();
//         const usuario = await clientmongo.db('moviehelper')
//             .collection('usuarios')
//             .findOne({_id: new ObjectId(id)});
//         return usuario;
// }

module.exports = {getUsuario, getUsuarioId};