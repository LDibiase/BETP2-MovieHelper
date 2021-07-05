var express = require('express');
var router = express.Router();
const User = require('../data/db/usuariosdb')

// # EndPoint que muestra los usuarios existentes 
router.get('/', async function(req, res, next) {
     const usuario = await User.getUsuarios();
       res.json(usuario);  
     });
// # EndPoint que muestre usuario por mail
router.get('/:email', async (req, res) => {
  const usuario = await User.findUserByEmail(req.params.email);
  res.json(usuario)
})     

// # EndPoint para crear un usuario
router.post('/', async (req, res) => {
  const result = await User.addUser(req.body);
  res.json(result);
});

// # EndPoint login
router.post('/login', async (req, res)=>{
  try {
    const user = await User.findUser(req.body.email, req.body.password);
    console.log(user);
    const token = await User.generateJWT(user);

    res.send({user, token});
  } catch (error) {
    res.status(401).send(error.message);
  }
});

// # PUT add favorites
router.put('/addFavorites/:email',  async (req, res) => {
  try {
    const user = await User.findUserByEmail(req.params.email);
    const result = await User.addPelicula(user._id, req.body)
    res.send({result});
  } catch (error) {
    res.status(401).send(error.message);
  }
});

// PUT remove favorite
router.put('/removeFavorites/:email',  async (req, res) => {
  try {
    const user = await User.findUserByEmail(req.params.email);
    const result = await User.removePelicula(user._id, req.body)
    res.send({result});
  } catch (error) {
    res.status(401).send(error.message);
  }
});

module.exports = router;
