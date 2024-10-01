const mongoose = require('mongoose')

const FilmSchema = new mongoose.Schema({}, { strict: false })

module.exports = mongoose.model('Film', FilmSchema, 'films')