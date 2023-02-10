const Sequelize = require("sequelize");
const { DATABASS, DB_USER, DB_PASS, PORT } = process.env;

const sequelize = new Sequelize("dubemdb", DB_USER, DB_PASS, {
  dialect: "mysql",
});

const Students = sequelize.define(
  "Students",
  {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    level: {
      type: Sequelize.STRING,
    },
  },
  {
    tableName: "Students",
  }
);
Students.sync();

module.exports = Students;
