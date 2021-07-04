var express = require('express');
var router = express.Router();
const User = require('../data/db/usuariosdb')

router.get('/', async function(req, res, next) {
     const usuario = await User.getUsuarios();
       res.json(usuario);  
     });

router.get('/:email', async (req, res)=>{
   const user = await User.getUsuarioPorId(req.params.email);
   res.send(user);
  // User.findOne({ email: req.params.id })
  //   .then((user) =>
  //     user
  //       ? res.json(user)
  //       : res.status(404).json({ message: "Couldn't find user" })
  //   )
  //   .catch((error) => res.status(500).json({ message: error.message }));
});

// GET by email and password
router.get('/:email/:pass', async function (req, res) {
  const usuario = await User.getUsuarioPorContrasenia(req.params.email, req.param.pass);
  res.json(usuario);  
});

// POST
router.post('/', async (req, res) => {
  const result = await User.addUser(req.body);
  res.json(result);
});

// PUT add favorites
router.put('/:userId', (req, res) => {
  const userId = req.params.userId;

  User.findOne({ _id: userId })
    .then((user) =>
      User.findOneAndUpdate(
        { _id: userId },
        { favoritos: [...user.favoritos, req.body] },
        { new: true }
      )
        .then((user) =>
          user
            ? res.json(user)
            : res.status(404).json({ message: "User couldn't be updated" })
        )
        .catch((error) => res.status(500).json({ message: error.message }))
    )
    .catch((error) => res.status(500).json({ message: error.message }));
});

// PUT remove favorite
router.put('/:userId/:filmId', (req, res) => {
  const userId = req.params.userId;
  const filmId = req.params.filmId;

  User.findOne({ _id: userId })
    .then((user) => {
      const idx = user.favoritos.findIndex((f) => f.imdbID === filmId);
      const favoritos = [...user.favoritos];

      if (idx > -1) {
        favoritos.splice(idx, 1);
        User.findOneAndUpdate({ _id: userId }, { favoritos }, { new: true })
          .then((user) =>
            user
              ? res.json(user)
              : res.status(404).json({ message: "User couldn't be updated" })
          )
          .catch((error) => res.status(500).json({ message: error.message }));
      } else {
        res.status(404).json({ message: 'Film is not a favorite' });
      }
    })
    .catch((error) => res.status(500).json({ message: error.message }));
});

module.exports = router;
