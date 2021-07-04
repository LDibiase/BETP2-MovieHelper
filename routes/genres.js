var express = require('express');
var router = express.Router();
const dataGenres = require('../data/genres');

/* GET home page. */
router.get('/', function(req, res) {
    const requests = dataGenres.getGenre();

    Promise.all(requests)
    .then((responses) => {
        const genre = responses.reduce(
          (acc, response) => [...acc, ...response],
          []
        );
        genre.length
          ? res.send(genre)
          : res.status(404).json({ message: "Couldn't find genre" });
      })
      .catch((error) => res.status(500).json({ message: error.message }));
  });
  
module.exports = router;