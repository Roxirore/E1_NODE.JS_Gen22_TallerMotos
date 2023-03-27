const express = require('express');

const repairsController = require('./../controllers/repairs.controller');

const router = express.Router();

router.get('/', repairsController.findAllRepairs);
router.post('/', repairsController.createRepair);
router.get('/repair/:id', repairsController.findOneRepair);
router.patch('/repair/:id', repairsController.updateRepair);
router.delete('/repair/:id', repairsController.deleteRepair);

module.exports = router;

// const repairRouter = express.Router();

// repairRouter.get('/', findAllRepairs);
// repairRouter.post('/', createRepair);
// repairRouter.get('/repair/:id', findOneRepair);
// repairRouter.patch('/repair/:id', updateRepair);
// repairRouter.delete('/repair/:id', deleteRepair);
