const express = require('express');

const findAllRepairs = (req, res) => {
  res.json({
    message: 'Rox, estoy en la ruta get repairs',
  });
};
const createRepair = (req, res) => {
  console.log(req.body);
  res.json({
    message: 'Rox, estoy en la ruta post repairs',
  });
};
const findOneRepair = (req, res) => {
  res.json({
    message: 'Rox, estoy en la ruta get one repair',
  });
};
const updateRepair = (req, res) => {
  console.log(req.params);
  const { requestTime } = req;
  res.json({
    message: 'Rox, estoy en la ruta patch repairs',
    requestTime,
  });
};
const deleteRepair = (req, res) => {
  res.json({
    message: 'Rox, estoy en la ruta delete repairs',
  });
};

const router = express.Router();

router.get('/', findAllRepairs);
router.post('/', createRepair);
router.get('/repair/:id', findOneRepair);
router.patch('/repair/:id', updateRepair);
router.delete('/repair/:id', deleteRepair);

module.exports = router;

// const repairRouter = express.Router();

// repairRouter.get('/', findAllRepairs);
// repairRouter.post('/', createRepair);
// repairRouter.get('/repair/:id', findOneRepair);
// repairRouter.patch('/repair/:id', updateRepair);
// repairRouter.delete('/repair/:id', deleteRepair);
