const mongoose = require('mongoose');

const beisbolistaSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  edad: Number,
  equipo: String
});

const Beisbolista = mongoose.model('Beisbolista', beisbolistaSchema);

module.exports = Beisbolista;