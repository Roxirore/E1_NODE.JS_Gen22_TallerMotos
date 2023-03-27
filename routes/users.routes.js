const express = require('express');

const usersController = require('./../controllers/users.controller');
const usersMiddleware = require('./../middlewares/users.middleware');

const router = express.Router();

router.get('/', usersController.findAllUsers);
router.post('/', usersMiddleware.validUsers, usersController.createUser);
router.get('/:userid', usersController.findOneUser);
router.patch(
  '/:userid',
  usersMiddleware.validUsers,
  usersController.updateUser
);
router.delete('/:userid', usersController.deleteUser);

module.exports = router;

// const userRouter = express.Router();

// userRouter.get('/', findAllUsers);
// userRouter.post('/', createUser);
// userRouter.get('/:userid', findOneUser);
// userRouter.patch('/:userid', updateUser);
// userRouter.delete('/:userid', deleteUser);
