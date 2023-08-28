const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('Driver', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name.forename', // Usar el campo correspondiente en los datos de la API
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name.surname', // Usar el campo correspondiente en los datos de la API
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'description', // Usar el campo correspondiente en los datos de la API
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'image.url', // Usar el campo correspondiente en los datos de la API
    },
    nacionalidad: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'nationality', // Usar el campo correspondiente en los datos de la API
    },
    fechaNacimiento: {
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
