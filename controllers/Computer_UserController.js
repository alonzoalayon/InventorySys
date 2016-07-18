var Computer_UserModel = require('../models/Computer_UserModel.js');

/**
* Computer_UserController.js
*
* @description :: Server-side logic for managing computer_Users.
*/
module.exports = {
  
  /**
  * Computer_UserController.list()
  */
  list: function (req, res) {
    Computer_UserModel.find(function (err, computer_Users) {
      if (err) {
        return res.json(500, {
          message: 'Error getting computer_User.'
        });
      }
      return res.json(computer_Users);
    });
  },
  
  /**
  * Computer_UserController.show()
  */
  show: function (req, res) {
    var id = req.params.id;
    Computer_UserModel.findOne({_id: id}, function (err, computer_User) {
      if (err) {
        return res.json(500, {
          message: 'Error getting computer_User.'
        });
      }
      if (!computer_User) {
        return res.json(404, {
          message: 'No such computer_User'
        });
      }
      return res.json(computer_User);
    });
  },
  
  /**
  * Computer_UserController.create()
  */
  create: function (req, res) {
    var computer_User = new Computer_UserModel({			first_name : req.body.first_name,			last_name : req.body.last_name
    });
    
    computer_User.save(function (err, computer_User) {
      if (err) {
        return res.json(500, {
          message: 'Error saving computer_User',
          error: err
        });
      }
      return res.json(computer_User);
    });
  },
  
  /**
  * Computer_UserController.update()
  */
  update: function (req, res) {
    var id = req.params.id;
    Computer_UserModel.findOne({_id: id}, function (err, computer_User) {
      if (err) {
        return res.json(500, {
          message: 'Error saving computer_User',
          error: err
        });
      }
      if (!computer_User) {
        return res.json(404, {
          message: 'No such computer_User'
        });
      }
      
      computer_User.first_name = req.body.first_name ? req.body.first_name : computer_User.first_name;			computer_User.last_name = req.body.last_name ? req.body.last_name : computer_User.last_name;			
      computer_User.save(function (err, computer_User) {
        if (err) {
          return res.json(500, {
            message: 'Error getting computer_User.'
          });
        }
        if (!computer_User) {
          return res.json(404, {
            message: 'No such computer_User'
          });
        }
        return res.json(computer_User);
      });
    });
  },
  
  /**
  * Computer_UserController.remove()
  */
  remove: function (req, res) {
    var id = req.params.id;
    Computer_UserModel.findByIdAndRemove(id, function (err, computer_User) {
      if (err) {
        return res.json(500, {
          message: 'Error getting computer_User.'
        });
      }
      return res.json(computer_User);
    });
  }
};
