const Repair = require('../models/repairs.model');

exports.findAllRepairs = async (req, res) => {
  const repairs = await Repair.findAll({
    where: {
      status: 'pending',
    },
  });
  res.status(200).json({
    message: 'the query has been done successfully',
    results: repairs.length,
    repairs,
  });
};
exports.createRepair = async (req, res) => {
  const { id, date, status, userid } = req.body;
  const repair = await Repair.create({
    date,
    status,
    userid,
  });
  res.status(201).json({
    message: 'estoy en la ruta post repairs',
    repair,
  });
};
exports.findOneRepair = async (req, res) => {
  const { id } = req.params;

  const repair = await Repair.findOne({
    where: {
      id,
    },
  });
  if (!repair) {
    return res.status(404).json({
      message: `repair with id ${id} not found`,
    });
  }

  res.status(200).json({
    message: 'the query has been done successfully',
    repair,
  });
};
exports.updateRepair = (req, res) => {
  console.log(req.params);
  const { requestTime } = req;
  res.json({
    message: 'estoy en la ruta patch repairs',
    requestTime,
  });
};
exports.deleteRepair = (req, res) => {
  res.json({
    message: 'estoy en la ruta delete repairs',
  });
};
