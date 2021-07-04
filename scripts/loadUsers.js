db = db.getSiblingDB('moviehelper');
db.usuarios.drop();
db.usuarios.insertMany([{
    "nombre": "orne",
    "apellido": "stirparo",
    "email": "orne@gmail.com",
    "password": "abc123",
    "favoritos": []
}
{
    "nombre": "andy",
    "apellido": "fowler",
    "email": "andy@gmail.com",
    "password": "abc123",
    "favoritos": []
}
])
//para cargar manualmente (que no sirve de nada porque quiero cargar usuarios), entrar a scrips: 
// ejecutar: mongo "mongodb+srv://cluster0.hegwv.mongodb.net/moviehelper" --username moviehelper
//contrasenia: moviehelper123
// despues:  load('loadusers.js') => tiene que devolver true