
//intento fallido xd

var express = require('express');
var router = express.Router();
const dataPeliculas = require('../data/pelicula.js')

/* GET users listing. */
router.get('/', function(req, res) {
   const peliculas = await dataPeliculas.getPeliculas();

   return peliculas 
});

module.exports = router;