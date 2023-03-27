exports.findAllUsers = (req, res) => {
  res.json({
    message: 'estoy en la ruta get users',
  });
};
exports.createUser = (req, res) => {
  console.log(req.body);
  res.status(201).json({
    message: 'estoy en la ruta post users',
  });
};
exports.findOneUser = (req, res) => {
  res.json({
    message: 'estoy en la ruta get one user',
  });
};
exports.updateUser = (req, res) => {
  console.log(req.params);
  res.json({
    message: 'estoy en la ruta patch users',
  });
};
exports.deleteUser = (req, res) => {
  res.json({
    message: 'estoy en la ruta delete users',
  });
};
