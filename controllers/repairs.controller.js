exports.findAllRepairs = (req, res) => {
  res.status(200).json({
    message: 'Rox, estoy en la ruta get repairs',
  });
};
exports.createRepair = (req, res) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Rox, estoy en la ruta post repairs',
  });
};
exports.findOneRepair = (req, res) => {
  res.json({
    message: 'Rox, estoy en la ruta get one repair',
  });
};
exports.updateRepair = (req, res) => {
  console.log(req.params);
  const { requestTime } = req;
  res.json({
    message: 'Rox, estoy en la ruta patch repairs',
    requestTime,
  });
};
exports.deleteRepair = (req, res) => {
  res.json({
    message: 'Rox, estoy en la ruta delete repairs',
  });
};
