var DepartmentsModel = require('../models/DepartmentsModel.js');

/**
* DepartmentsController.js
*
* @description :: Server-side logic for managing departmentss.
*/
module.exports = {
  
  /**
  * DepartmentsController.list()
  */
  list: function (req, res) {
    DepartmentsModel.find(function (err, departmentss) {
      if (err) {
        return res.json(500, {
          message: 'Error getting departments.'
        });
      }
      return res.json(departmentss);
    });
  },
  
  /**
  * DepartmentsController.show()
  */
  show: function (req, res) {
    var id = req.params.id;
    DepartmentsModel.findOne({_id: id}, function (err, departments) {
      if (err) {
        return res.json(500, {
          message: 'Error getting departments.'
        });
      }
      if (!departments) {
        return res.json(404, {
          message: 'No such departments'
        });
      }
      return res.json(departments);
    });
  },
  
  /**
  * DepartmentsController.create()
  */
  create: function (req, res) {
    var departments = new DepartmentsModel({			departments : req.body.departments
    });
    
    departments.save(function (err, departments) {
      if (err) {
        return res.json(500, {
          message: 'Error saving departments',
          error: err
        });
      }
      return res.json(departments);
    });
  },
  
  /**
  * DepartmentsController.update()
  */
  update: function (req, res) {
    var id = req.params.id;
    DepartmentsModel.findOne({_id: id}, function (err, departments) {
      if (err) {
        return res.json(500, {
          message: 'Error saving departments',
          error: err
        });
      }
      if (!departments) {
        return res.json(404, {
          message: 'No such departments'
        });
      }
      
      departments.departments = req.body.departments ? req.body.departments : departments.departments;			
      departments.save(function (err, departments) {
        if (err) {
          return res.json(500, {
            message: 'Error getting departments.'
          });
        }
        if (!departments) {
          return res.json(404, {
            message: 'No such departments'
          });
        }
        return res.json(departments);
      });
    });
  },
  
  /**
  * DepartmentsController.remove()
  */
  remove: function (req, res) {
    var id = req.params.id;
    DepartmentsModel.findByIdAndRemove(id, function (err, departments) {
      if (err) {
        return res.json(500, {
          message: 'Error getting departments.'
        });
      }
      return res.json(departments);
    });
  }
};
