/*
Sequelize Installation & Setup

Install the following packages from the Dependencies tab in Replit

express, sequelize , sqlite3

Create a folder named lib and create a file inside this folder named index.js

Create a sequelize instance

Export both sequelize instance and DataTypes which will be used to create models in the next step
*/

let sq = require("sequelize");
/*Imports the sequelize package, which is an Object-Relational Mapping (ORM) framework for Node.js. It simplifies the management of database data by mapping database entries to JavaScript objects and vice versa
 */
let sequelize_instance = new sq.Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});
/*
Creates an instance of Sequelize configured to use a SQLite database.
dialect: "sqlite": Specifies the type of database being used. In this case, it's SQLite.
storage: "./database.sqlite": Defines the path to the SQLite database file. This tells Sequelize where to find or create the database file.
*/
module.exports = { DataTypes: sq.DataTypes, sequelize_instance };
/*
Exports the sequelize instance and DataTypes object from this module.
DataTypes: A collection of data type definitions that Sequelize will use to define the model attributes. These correspond to the types of the columns in the database.
sequelize: The configured Sequelize instance, ready to be used elsewhere in the application to interact with the database.
*/
