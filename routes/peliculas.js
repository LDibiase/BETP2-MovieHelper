var express = require('express');
const { response } = require('../app.js');
var router = express.Router();
const dataPeliculas = require('../data/pelicula.js')

//const fetch = require('')
/* GET users listing. */
router.get('/', function(req, res) {
   //const peliculas = await dataPeliculas.getPeliculas();
//  return peliculas 
//const peliculas = await fetch('https://streaming-availability.p.rapidapi.com/genres');
//console.log(peliculas)
//const pelis = await peliculas.json();
//res.json(pelis)
res.send('la peli anda');

});

module.exports = router;