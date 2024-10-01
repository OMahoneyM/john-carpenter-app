const Film = require('../models/Film')

module.exports = {
    getIndex: async (req, res) => {
        try {
            const filmList = await Film.find({})
            //console.log(filmList)
            res.render('index.ejs', {films: filmList}) 
        } catch (err) {
            console.error(err)
        }
    }
}