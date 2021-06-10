const axios = require("axios").default;
require('dotenv').config(); //para las variables de entorno

const options = {
  method: 'GET',
  url: 'https://streaming-availability.p.rapidapi.com/genres',
  headers: {

    //en heroku
    'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
    'x-rapidapi-host': process.env.X-RAPIDAPI-HOST
  }
};

function codeGenre(codigo){
    axios.request(options).then(function (response) {
	    return response.data.codigo
}).catch(function (error) {
	console.error(error);
});
};
