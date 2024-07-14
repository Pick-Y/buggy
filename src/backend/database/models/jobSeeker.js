// models/jobSearcher.js

const { DataTypes } = require('sequelize');
const sequelize = require('../db.connection');

const JobSeeker = sequelize.define('JobSeeker', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstname: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(254),
    allowNull: false,
    unique: true,
  },
  nationality: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  start_age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  end_age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  education: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  currentvisa: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  workrights: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

module.exports = JobSeeker;
