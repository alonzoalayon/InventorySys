var express = require('express');
var router = express.Router();
var ComputerController = require('../controllers/ComputerController.js');

/*
* GET
*/
router.get('/', function (req, res) {
  ComputerController.list(req, res);
});

/*
* GET
*/
router.get('/:id', function (req, res) {
  ComputerController.show(req, res);
});

/*
* POST
*/
router.post('/', function (req, res) {
  ComputerController.create(req, res);
});

/*
* PUT
*/
router.put('/:id', function (req, res) {
  ComputerController.update(req, res);
});

/*
* DELETE
*/
router.delete('/:id', function (req, res) {
  ComputerController.remove(req, res);
});

module.exports = router;
