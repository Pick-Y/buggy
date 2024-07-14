module.exports = {
    HOST: 'localhost',
    USER: 'administrator',
    PASSWORD: 'password',
    DB: 'postgres',
    PORT: 5432,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }