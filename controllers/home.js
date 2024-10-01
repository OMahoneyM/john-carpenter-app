const Film = require('../models/Film')

module.exports = {
    getIndex: async (req, res) => {
        try {
            //Store every doc from film collection in array
            const filmList = await Film.find({})
            //Pass filmList array into index.ejs view
            res.render('index.ejs', {films: filmList}) 
        } catch (err) {
            console.error(err)
        }
    }
}