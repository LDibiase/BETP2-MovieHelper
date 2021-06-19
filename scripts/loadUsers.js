db = db.getSiblingDB('moviehelper');
db.usuarios.drop();
db.usuarios.insertMany([{
    "_id": 123,
    "name": "orne",
    "email": "cualquiera@gmail.com"
}])
//para cargar manualmente (que no sirve de nada porque quiero cargar usuarios), entrar a scrips: 
// ejecutar: mongo "mongodb+srv://cluster0.hegwv.mongodb.net/moviehelper" --username moviehelper
//contrasenia: moviehelper123
// despues:  load('loadusers.js') => tiene que devolver true