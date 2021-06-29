// const axios = require("axios").default;
// require('dotenv').config(); //para las variables de entorno
require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios').default;

  //recibimos el nombre que mandamos a la consulta de la API

  const MOVIES_API = 'https://streaming-availability.p.rapidapi.com';

function getFilms(req){

    const requests = [];

  if (req.query.service) {
    requests.push(
      axios.request({
        method: 'GET',
        url: `${MOVIES_API}/search/basic`,
        params: {
          country: 'ar',
          service: req.query.service,
          type: 'movie',
        },
        headers: {
          'x-rapidapi-host': process.env.X_RAPIDAPI_HOST,
          'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
        },
      })
    );
  } else {
    requests.push(
      axios.request({
        method: 'GET',
        url: `${MOVIES_API}/search/basic`,
        params: {
          country: 'ar',
          service: 'netflix',
          type: 'movie',
        },
        headers: {
          'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
          'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
        },
      }),
      axios.request({
        method: 'GET',
        url: `${MOVIES_API}/search/basic`,
        params: {
          country: 'ar',
          service: 'prime',
          type: 'movie',
        },
        headers: {
          'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
          'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
        },
      })
    );
  }

 return requests
}

  module.exports = {getFilms};