const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

// turn on connection to database and server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

module.exports = sequelize;
