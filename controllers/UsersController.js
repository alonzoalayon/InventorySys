var UsersModel = require('../models/UsersModel.js');

/**
* UsersController.js
*
* @description :: Server-side logic for managing userss.
*/
module.exports = {
  
  /**
  * UsersController.list()
  */
  list: function (req, res) {
    UsersModel.find(function (err, userss) {
      if (err) {
        return res.json(500, {
          message: 'Error getting users.'
        });
      }
      return res.json(userss);
    });
  },
  
  /**
  * UsersController.show()
  */
  show: function (req, res) {
    var id = req.params.id;
    UsersModel.findOne({_id: id}, function (err, users) {
      if (err) {
        return res.json(500, {
          message: 'Error getting users.'
        });
      }
      if (!users) {
        return res.json(404, {
          message: 'No such users'
        });
      }
      return res.json(users);
    });
  },
  
  /**
  * UsersController.create()
  */
  create: function (req, res) {
    var users = new UsersModel({			first_name : req.body.first_name,			last_name : req.body.last_name
    });
    
    users.save(function (err, users) {
      if (err) {
        return res.json(500, {
          message: 'Error saving users',
          error: err
        });
      }
      return res.json(users);
    });
  },
  
  /**
  * UsersController.update()
  */
  update: function (req, res) {
    var id = req.params.id;
    UsersModel.findOne({_id: id}, function (err, users) {
      if (err) {
        return res.json(500, {
          message: 'Error saving users',
          error: err
        });
      }
      if (!users) {
        return res.json(404, {
          message: 'No such users'
        });
      }
      
      users.first_name = req.body.first_name ? req.body.first_name : users.first_name;			users.last_name = req.body.last_name ? req.body.last_name : users.last_name;			
      users.save(function (err, users) {
        if (err) {
          return res.json(500, {
            message: 'Error getting users.'
          });
        }
        if (!users) {
          return res.json(404, {
            message: 'No such users'
          });
        }
        return res.json(users);
      });
    });
  },
  
  /**
  * UsersController.remove()
  */
  remove: function (req, res) {
    var id = req.params.id;
    UsersModel.findByIdAndRemove(id, function (err, users) {
      if (err) {
        return res.json(500, {
          message: 'Error getting users.'
        });
      }
      return res.json(users);
    });
  }
};
