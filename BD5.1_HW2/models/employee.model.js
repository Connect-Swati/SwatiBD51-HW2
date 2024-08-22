/*
Creating Models

Create a folder named models and create a file inside this folder named employee.model.js

Import the sequelize instance & DataTypes from the /lib/index.js file

Define a model named employee with the columns name as TEXT, department as TEXT, salary as INTEGER, designation as TEXT

Export the model from the file

*/
const { sequelize_instance, DataTypes } = require("../lib/index");
// Defines a model representing the 'employee ' table with its structure
const employee = sequelize_instance.define("employee ", {
  name: DataTypes.TEXT,
  department: DataTypes.TEXT,
  salary: DataTypes.INTEGER,
  designation: DataTypes.TEXT,
});
// Makes the post model available elsewhere in the application
module.exports = employee;
