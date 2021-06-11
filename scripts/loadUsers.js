db = db.getSiblingDB('moviehelper');
db.usuarios.drop();
db.usuarios.insertMany([
    {
        "_id": 0
    }
]);