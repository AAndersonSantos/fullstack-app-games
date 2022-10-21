const sequelize = require('sequelize');
const db = require('../db');

const games = db.define('jogos', {

  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNULL: false,
    primaryKey: true
  },
  nome_jogo: {
    type: sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  descricao: {
    type: sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  link_imagem: {
    type: sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  preco: {
    type: sequelize.DECIMAL,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  plataformas: {
    type: sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lojas: {
    type: sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  createdAt: {
    type: 'TIMESTAMP',
    defaultVaue: sequelize.literal('CURRENT_TIMESTAMP'),
    allowNULL: false
  },
  updatedAt: {
    type: 'TIMESTAMP',
    defaultVaue: sequelize.literal('CURRENT_TIMESTAMP'),
    allowNULL: false
  }
})

//games.sync({force: true}) //For create a automatic table in database
module.exports = sequelize
module.exports = games
