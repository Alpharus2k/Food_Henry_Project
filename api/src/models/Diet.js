const { DataTypes } = require('sequelize');
const NO_NAME = "Ingrese el nombre de la receta"
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('diet', {
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
      unique: true,
      validate: {
        notEmpty: true,
        is: /^[a-zA-Z0-9 íáúóéÍÁÓÚÉñÑ/-]*$/,
        notEmpty: true,
        notNull: {
          msg: NO_NAME
        }
      },
    },
  },
  {timestamps: false});
};
