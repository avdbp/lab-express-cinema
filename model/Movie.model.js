const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let movieSchema = new Schema(
  {
    title: {
      type: String,
    },
    director: {
      type: String,
    },
    stars: {
      type: [String],
    },
    image: {
      type: String,
      default: "https://images.media-allrecipes.com/images/75131.jpg",
    },
    description: {
      type: String,
    },
    showtimes: {
      type: [String],
    },
  },
  
  {
    timestamps: true,
  }
);

//schema para montar el modelo (estructura de un documento de la coleccion)
const Movie = mongoose.model("Movie", movieSchema); //Modelo: clase para manipular documentos en una colección

//especificas qué va a devolver el require
module.exports = Movie;