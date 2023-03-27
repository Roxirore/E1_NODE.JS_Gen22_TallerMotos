const Repair = require('../models/repairs.model');

exports.validRepairs = (req, res, next) => {
  const { id, date, status, userid } = req.body;
  if (!date) {
    return res.status(400).json({
      status: 'error',
      message: 'the date is required',
    });
  }
  if (!status) {
    return res.status(400).json({
      status: 'error',
      message: 'the status is required',
    });
  }
  if (!userid) {
    return res.status(400).json({
      status: 'error',
      message: 'the userid is required',
    });
  }
  next();
};
