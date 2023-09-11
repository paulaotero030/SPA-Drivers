const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('Driver', {
    id: {
      type: DataTypes.UUID,

      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name.forename', // Usar el campo correspondiente en los datos de la API
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name.surname', // Usar el campo correspondiente en los datos de la API
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'description', // Usar el campo correspondiente en los datos de la API
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'image.url', // Usar el campo correspondiente en los datos de la API
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'nationality', // Usar el campo correspondiente en los datos de la API
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'dob', // Usar el campo correspondiente en los datos de la API
    },
  });
};

// MODELS 1
// ID (deben ser distintos a los que vienen de la API). *
// Nombre. *
// Apellido. *
// Descripción. *
// Imagen. *
// Nacionalidad. *
// Fecha de Nacimiento. *
