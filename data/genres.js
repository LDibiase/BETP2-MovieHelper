const axios = require("axios").default;
require('dotenv').config();

function getGenre(genCode){
  const requests = [];
    requests.push(
      axios.request({
        method: 'GET',
        url: `${process.env.MOVIES_API}/search/basic`,
        params: {
          country: 'ar',
          service: 'netflix',
          type: 'movie',
          genre: genCode,
        },
        headers: {
          'x-rapidapi-host': process.env.X_RAPIDAPI_HOST,
          'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
        },
      }),
      axios.request({
        method: 'GET',
        url: `${process.env.MOVIES_API}/search/basic`,
        params: {
          country: 'ar',
          service: 'prime',
          type: 'movie',
          genre: genCode,
        },
        headers: {
          'x-rapidapi-host': process.env.X_RAPIDAPI_HOST,
          'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
        },
      })
     );
 return requests
}
  // const requests = [];
  //   requests.push(
  //     axios.request({
  //       method: 'GET',
  //       url:`${process.env.GENRES_API}/${genCode}`,
  //       headers: {
  //         'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
  //         'x-rapidapi-host': process.env.X_RAPIDAPI_HOST
  //       }
  //     },
  //     )
  //   )
  //   return requests;



module.exports = {getGenre};