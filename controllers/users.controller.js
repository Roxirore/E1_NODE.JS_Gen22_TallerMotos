const User = require('../models/users.model');

exports.findAllUsers = async (req, res) => {
  const users = await User.findAll({
    where: {
      status: 'available',
    },
  });
  res.json({
    message: 'the query has been done successfully',
    results: users.length,
    users,
  });
};
exports.createUser = async (req, res) => {
  const { userid, name, email, password, role, status } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    role,
    status,
  });
  res.status(201).json({
    message: 'estoy en la ruta post users',
    user,
  });
};
exports.findOneUser = async (req, res) => {
  const { userid } = req.params;

  const user = await User.findOne({
    where: {
      userid,
    },
  });
  if (!user) {
    return res.status(404).json({
      message: `user with id ${userid} not found`,
    });
  }
  res.status(200).json({
    message: 'the query has been done successfully',
    user,
  });
};
exports.updateUser = async (req, res) => {
  const { userid } = req.params;
  const { name, email, password, role, status } = req.body;
  const user = await User.findOne({
    where: {
      userid,
      status: 'available',
    },
  });
  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: `the user with id: ${userid} is not found`,
    });
  }
  await user.update({ name, email });
  res.status(200).json({
    status: 'success',
    message: 'the user has been updated',
  });
};
exports.deleteUser = async (req, res) => {
  // traer el id de la res,params
  const { userid } = req.params;
  // buscar el producto a actualizar
  const user = await User.findOne({
    where: {
      userid,
      status: 'available',
    },
  });
  // validar si el producto existe sino error
  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: `the user with id: ${userid} is not found`,
    });
  }
  // usar el update para pasar el estado a unavailable o cancelled
  await user.update({ status: 'unavailable' });
  res.status(200).json({
    status: 'success',
    message: 'the user has been disabled',
  });
};
