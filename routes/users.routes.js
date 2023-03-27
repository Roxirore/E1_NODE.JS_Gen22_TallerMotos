const express = require('express');

const usersController = require('./../controllers/users.controller');

const router = express.Router();

router.get('/', usersController.findAllUsers);
router.post('/', usersController.createUser);
router.get('/:userid', usersController.findOneUser);
router.patch('/:userid', usersController.updateUser);
router.delete('/:userid', usersController.deleteUser);

module.exports = router;

// const userRouter = express.Router();

// userRouter.get('/', findAllUsers);
// userRouter.post('/', createUser);
// userRouter.get('/:userid', findOneUser);
// userRouter.patch('/:userid', updateUser);
// userRouter.delete('/:userid', deleteUser);
