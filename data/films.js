require('dotenv').config();
const axios = require('axios').default;


 // const MOVIES_API = 'https://streaming-availability.p.rapidapi.com';
function getFilms(){
    const requests = [];
    requests.push(
      axios.request({
        method: 'GET',
        url: `${process.env.MOVIES_API}/search/basic`,
        params: {
          country: 'ar',
          service: 'netflix',
          type: 'movie',
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
        },
        headers: {
          'x-rapidapi-host': process.env.X_RAPIDAPI_HOST,
          'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
        },
      })
     );
 return requests
}

function getFilmsForNetflix(){
   const requests = [];
   
   requests.push(
    axios.request({
      method: 'GET',
      url: `${process.env.MOVIES_API}/search/basic`,
      params: {
        country: 'ar',
        service: 'netflix',
        type: 'movie',
      },
      headers: {
        'x-rapidapi-host': process.env.X_RAPIDAPI_HOST,
        'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
      },
    }));
    return requests
 }

 function getFilmsForPrimeVideo(){
  const requests = [];
  
  requests.push(
   axios.request({
     method: 'GET',
     url: `${process.env.MOVIES_API}/search/basic`,
     params: {
       country: 'ar',
       service: 'prime',
       type: 'movie',
     },
     headers: {
       'x-rapidapi-host': process.env.X_RAPIDAPI_HOST,
       'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
     },
   }));
   return requests
}

function getFilmByName(name){
    const requests = [];
    
    requests.push(
    axios.request({
      method: 'GET',
      url: `${process.env.MOVIES_API}/search/basic`,
      params: {
        country: 'ar',
        service: 'netflix',
        type: 'movie',
        keyword: name,
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
        keyword: name,
      },
      headers: {
        'x-rapidapi-host': process.env.X_RAPIDAPI_HOST,
        'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
      }
    }))
    
     return requests
  }



  module.exports = {getFilms, getFilmsForNetflix, getFilmsForPrimeVideo, getFilmByName};