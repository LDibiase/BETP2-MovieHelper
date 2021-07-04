const axios = require("axios").default;
const router = express.Router();
const dotenv = require('dotenv').config(); //para las variables de entorno

function getGenre(genCode){
  const requests = [];
    requests.push(
      axios.request({
        method: 'GET',
        url:`${process.env.GENRES_API}/${genCode}`,
        headers: {
          'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
          'x-rapidapi-host': process.env.X_RAPIDAPI_HOST
        }
      },
      )
    )
    return requests;
}


module.exports = getGenre;