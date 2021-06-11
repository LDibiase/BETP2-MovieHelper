var express = require('express');
var router = express.Router();
const datausuarios = require('../data/db/usuariosdb')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// router.get('/:id', async (req, res)=> {
//   const usuario = await datausuarios.getUsuarioId(req.params.id);
//     res.json(usuario);
// });


//endpoint post para login con google
router.post('/', async (req, res)=>{
  const result = await data.addUser(req.body);
  res.json(result);
});

// router.post('/login', async (req, res)=>{
//   try {
//     const user = await data.findByCredentials(req.body.email, req.body.password);
//     console.log(user);
//     const token = await data.generateJWT(user);

//     res.send({user, token});
//   } catch (error) {
//     res.status(401).send(error.message);
//   }
// });
module.exports = router;
