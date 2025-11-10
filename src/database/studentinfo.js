// student.js
const { DataTypes } = require('sequelize');
const sequelize = require('./db'); // import configured sequelize instance

const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true, 
  tableName: 'students' 
});

module.exports = Student;
