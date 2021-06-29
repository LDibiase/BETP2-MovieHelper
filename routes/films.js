require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const dataFilms = require('../data/films')

// REST methods

// GET
router.get('/', (req, res) => {
  const requests = dataFilms.getFilms(req);

  Promise.all(requests)
    .then((responses) => {
      const movies = responses.reduce(
        (acc, response) => [...acc, ...response.data.results],
        []
      );
      movies.length
        ? res.send(movies)
        : res.status(404).json({ message: "Couldn't find movies" });
    })
    .catch((error) => res.status(500).json({ message: error.message }));
});

module.exports = router;
