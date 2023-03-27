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
exports.updateRepair = async (req, res) => {
  const { id } = req.params;
  const { requestTime } = req;
  const { date, status, userid } = req.body;

  const repair = await Repair.findOne({
    where: {
      id,
      status: 'pending',
    },
  });
  if (!repair) {
    return res.status(404).json({
      status: 'error',
      message: `repair with id: ${id} is not found`,
    });
  }
  await repair.update({ date: requestTime, status: 'completed', userid });
  res.status(200).json({
    status: 'success',
    message: 'the repair has been updated',
    requestTime,
  });
};
exports.deleteRepair = async (req, res) => {
  // traer el id de la res,params
  const { id } = req.params;
  // buscar el producto a actualizar
  const repair = await Repair.findOne({
    where: {
      id,
    },
  });
  // validar si el producto existe sino error
  if (!repair) {
    return res.status(404).json({
      status: 'error',
      message: `the repairr with id: ${id} is not found`,
    });
  }
  // usar el update para pasar el estado a unavailable o cancelled
  await repair.update({ status: 'cancelled' });
  res.status(200).json({
    status: 'success',
    message: 'the repairr has been cancelled',
  });
};
