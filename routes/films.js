const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const dataFilms = require('../data/films')

// REST methods

// GET
router.get('/', (req, res) => {
  const requests = dataFilms.getFilms();

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

router.get('/netflix', (req, res) => {


  const requestsForPlatform = dataFilms.getFilmsForNetflix();

  Promise.all(requestsForPlatform)
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

router.get('/primeVideo', (req, res) => {
  const requestsForPlatform = dataFilms.getFilmsForPrimeVideo();

  Promise.all(requestsForPlatform)
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

router.get('/:title', (req, res) => {
  const requestsForPlatform = dataFilms.getFilmByName(req.params.title);

  Promise.all(requestsForPlatform)
  .then((responses) => {
    const movies = responses.reduce(
      (acc, response) => [...acc, ...response.data.results],
      []
    );
    movies
      ? res.send(movies)
      : res.status(404).json({ message: "Couldn't find movies" });
  })
  .catch((error) => res.status(500).json({ message: error.message }));
})

module.exports = router;
