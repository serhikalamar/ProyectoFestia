const { Sequelize } = require('sequelize');
//  paquete para conectarse a la base de datos MySQL
const sequelize = new Sequelize('festia_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => console.log('✅ Conexión exitosa a MySQL'))
  .catch(err => console.error('Error al conectar:', err));

module.exports = sequelize;
