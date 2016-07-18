var express = require('express');
var router = express.Router();
var Computer_UserController = require('../controllers/Computer_UserController.js');

/*
* GET
*/
router.get('/', function (req, res) {
  Computer_UserController.list(req, res);
});

/*
* GET
*/
router.get('/:id', function (req, res) {
  Computer_UserController.show(req, res);
});

/*
* POST
*/
router.post('/', function (req, res) {
  Computer_UserController.create(req, res);
});

/*
* PUT
*/
router.put('/:id', function (req, res) {
  Computer_UserController.update(req, res);
});

/*
* DELETE
*/
router.delete('/:id', function (req, res) {
  Computer_UserController.remove(req, res);
});

module.exports = router;
