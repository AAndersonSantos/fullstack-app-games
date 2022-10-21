const express = require('express');
const router = express.Router();
const controller = require("../controllers/controller");

router.get('/', controller.findAllGame);
router.get('/:id', controller.findGameById);
router.post('/create', controller.createGame);
router.put('/update/:id', controller.updateGame);
router.delete('/delete/:id', controller.deleteGame);

module.exports = router;