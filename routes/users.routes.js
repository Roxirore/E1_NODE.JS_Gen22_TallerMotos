const express = require('express');

const findAllUsers = (req, res) => {
  res.json({
    message: 'Rox, estoy en la ruta get users',
  });
};
const createUser = (req, res) => {
  console.log(req.body);
  res.json({
    message: 'Rox, estoy en la ruta post users',
  });
};
const findOneUser = (req, res) => {
  res.json({
    message: 'Rox, estoy en la ruta get one user',
  });
};
const updateUser = (req, res) => {
  console.log(req.params);
  res.json({
    message: 'Rox, estoy en la ruta patch users',
  });
};
const deleteUser = (req, res) => {
  res.json({
    message: 'Rox, estoy en la ruta delete users',
  });
};

const router = express.Router();

router.get('/', findAllUsers);
router.post('/', createUser);
router.get('/:userid', findOneUser);
router.patch('/:userid', updateUser);
router.delete('/:userid', deleteUser);

module.exports = router;

// const userRouter = express.Router();

// userRouter.get('/', findAllUsers);
// userRouter.post('/', createUser);
// userRouter.get('/:userid', findOneUser);
// userRouter.patch('/:userid', updateUser);
// userRouter.delete('/:userid', deleteUser);
