const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const StudentExam = require('./studentExam');

const Answer = sequelize.define('Answer', {
  text: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isCorrect: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'answers'
});

// Relationship: One question → many answers
StudentExam.hasMany(Answer, { foreignKey: 'examId', as: 'answers' });
Answer.belongsTo(StudentExam, { foreignKey: 'examId', as: 'question' });

module.exports = Answer;
