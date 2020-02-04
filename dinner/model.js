const Sequelize = require('sequelize');
const sequelize = require('../db');

const Dinner = sequelize.define(
  'dinner',
  {
    meal: {
      type: Sequelize.STRING,
      allowNull: false
    },
    diet: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false,
    tableName: 'dinners'
  }
);

module.exports = Dinner;
