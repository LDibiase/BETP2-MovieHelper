var express = require('express');
var router = express.Router();
const dataGenres = require('../data/genres');

router.get('/:id', function(req, res) {
    const requests = dataGenres.getGenre(req.params.id);

    Promise.all(requests)
    .then((responses) => {
        const genre = responses.reduce(
          (acc, response) => [...acc, ...response.data.results],
          []
        );
        genre.length
          ? res.send(genre)
          : res.status(404).json({ message: "Couldn't find genre" });
      })
      .catch((error) => res.status(500).json({ message: error.message }));
  });

  router.get('/', function(req, res){
    const requests = dataGenres.getAllGenres();

    Promise.all(requests)
    .then((responses) => {
        const genre = responses.reduce(
          (acc, response) => [...acc, ...response.data.results],
          []
        );
        genre.length
          ? res.send(genre)
          : res.status(404).json({ message: "Couldn't find genre" });
      })
      .catch((error) => res.status(500).json({ message: error.message }));
  });
  
module.exports = router;