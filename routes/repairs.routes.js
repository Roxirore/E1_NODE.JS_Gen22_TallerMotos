const express = require('express');

const repairsController = require('./../controllers/repairs.controller');
const repairsMiddleware = require('./../middlewares/repairs.middleware');

const router = express.Router();

router.get('/', repairsController.findAllRepairs);
router.post(
  '/',
  repairsMiddleware.validRepairs,
  repairsController.createRepair
);
router.get('/repair/:id', repairsController.findOneRepair);
router.patch(
  '/repair/:id',
  repairsMiddleware.validRepairs,
  repairsController.updateRepair
);
router.delete('/repair/:id', repairsController.deleteRepair);

module.exports = router;

// const repairRouter = express.Router();

// repairRouter.get('/', findAllRepairs);
// repairRouter.post('/', createRepair);
// repairRouter.get('/repair/:id', findOneRepair);
// repairRouter.patch('/repair/:id', updateRepair);
// repairRouter.delete('/repair/:id', deleteRepair);
