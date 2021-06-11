const axios = require("axios").default;
const dotenv = require('dotenv').config(); //para las variables de entorno

console.log(dotenv)

const options = {
  method: 'GET',
  url: 'https://streaming-availability.p.rapidapi.com/genres',
  headers: {

/* 'x-rapidapi-key': '2e201709d3mshcc8b942e035c08ap1c5bbfjsn9dba6c19c6b6',
'x-rapidapi-host': 'streaming-availability.p.rapidapi.com' */
    //en heroku
    'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
    'x-rapidapi-host': process.env.X_RAPIDAPI_HOST
  }
};

/* console.log(process.env); */

/* axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
 */
/* 
function codeGenre(codigo){
    axios.request(options).then(function (response) {
	    return response.data.codigo
}).catch(function (error) {
	console.error(error);
});
}; */

