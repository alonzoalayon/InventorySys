var express = require('express');
var router = express.Router();
var UsersController = require('../controllers/UsersController.js');

/*
* GET
*/
router.get('/', function (req, res) {
  UsersController.list(req, res);
});

/*
* GET
*/
router.get('/:id', function (req, res) {
  UsersController.show(req, res);
});

/*
* POST
*/
router.post('/', function (req, res) {
  UsersController.create(req, res);
});

/*
* PUT
*/
router.put('/:id', function (req, res) {
  UsersController.update(req, res);
});

/*
* DELETE
*/
router.delete('/:id', function (req, res) {
  UsersController.remove(req, res);
});

module.exports = router;
