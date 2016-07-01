var ComputerModel = require('../models/ComputerModel.js');

/**
* ComputerController.js
*
* @description :: Server-side logic for managing computers.
*/
module.exports = {
  
  /**
  * ComputerController.list()
  */
  list: function (req, res) {
    ComputerModel.find(function (err, computers) {
      if (err) {
        return res.json(500, {
          message: 'Error getting computer.'
        });
      }
      return res.json(computers);
    });
  },
  
  /**
  * ComputerController.show()
  */
  show: function (req, res) {
    var id = req.params.id;
    ComputerModel.findOne({_id: id}, function (err, computer) {
      if (err) {
        return res.json(500, {
          message: 'Error getting computer.'
        });
      }
      if (!computer) {
        return res.json(404, {
          message: 'No such computer'
        });
      }
      return res.json(computer);
    });
  },
  
  /**
  * ComputerController.create()
  */
  create: function (req, res) {
    var computer = new ComputerModel({			computer_id : req.body.computer_id,			computer_owner : req.body.computer_owner,			computer_description : req.body.computer_description,			computer_department : req.body.computer_department
    });
    
    computer.save(function (err, computer) {
      if (err) {
        return res.json(500, {
          message: 'Error saving computer',
          error: err
        });
      }
      return res.json(computer);
    });
  },
  
  /**
  * ComputerController.update()
  */
  update: function (req, res) {
    var id = req.params.id;
    ComputerModel.findOne({_id: id}, function (err, computer) {
      if (err) {
        return res.json(500, {
          message: 'Error saving computer',
          error: err
        });
      }
      if (!computer) {
        return res.json(404, {
          message: 'No such computer'
        });
      }
      
      computer.computer_id = req.body.computer_id ? req.body.computer_id : computer.computer_id;			computer.computer_owner = req.body.computer_owner ? req.body.computer_owner : computer.computer_owner;			computer.computer_description = req.body.computer_description ? req.body.computer_description : computer.computer_description;			computer.computer_department = req.body.computer_department ? req.body.computer_department : computer.computer_department;			
      computer.save(function (err, computer) {
        if (err) {
          return res.json(500, {
            message: 'Error getting computer.'
          });
        }
        if (!computer) {
          return res.json(404, {
            message: 'No such computer'
          });
        }
        return res.json(computer);
      });
    });
  },
  
  /**
  * ComputerController.remove()
  */
  remove: function (req, res) {
    var id = req.params.id;
    ComputerModel.findByIdAndRemove(id, function (err, computer) {
      if (err) {
        return res.json(500, {
          message: 'Error getting computer.'
        });
      }
      return res.json(computer);
    });
  }
};
