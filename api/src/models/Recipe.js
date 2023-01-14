const { DataTypes } = require('sequelize');
const MAX_SCORE = 10;
const MIN_SCORE = 1;

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    // Usa UUID como Primary Key
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      validate: {
        isUUID: 4,
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    score: {
      type: DataTypes.INTEGER,
      // Validacion: No negativo, Entre tal y tal
      validate: {
        len: [MIN_SCORE,MAX_SCORE],
      }
    },
    stepByStep: {
      type: DataTypes.TEXT,
    }
  },
  {timestamps: false});
};
