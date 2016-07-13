var express = require('express');
var router = express.Router();
var DepartmentsController = require('../controllers/DepartmentsController.js');

/*
* GET
*/
router.get('/', function (req, res) {
  DepartmentsController.list(req, res);
});

/*
* GET
*/
router.get('/:id', function (req, res) {
  DepartmentsController.show(req, res);
});

/*
* POST
*/
router.post('/', function (req, res) {
  DepartmentsController.create(req, res);
});

/*
* PUT
*/
router.put('/:id', function (req, res) {
  DepartmentsController.update(req, res);
});

/*
* DELETE
*/
router.delete('/:id', function (req, res) {
  DepartmentsController.remove(req, res);
});

module.exports = router;
