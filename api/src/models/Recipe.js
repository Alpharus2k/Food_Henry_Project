const { DataTypes } = require('sequelize');
const MAX_SCORE = 100;
const MIN_SCORE = 1;
const NO_NAME = 'Ingrese el nombre de la receta';
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
        is: /^[a-zA-Z íáúóéñÑ]*$/,
        notEmpty: true,
        notNull: {
          msg: NO_NAME
        }
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
    },
    url:{
      type: DataTypes.STRING,
      validate: {
        //is : /((?:(?:http?|ftp)[s]*:\/\/)?[a-z0-9-%\/\&=?\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?)/gi
        is: /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
      },
      defaultValue: "https://spoonacular.com/recipeImages/157426-312x231.jpg"
    }

  },
  {timestamps: false});
};
