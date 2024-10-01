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
    },
    updateLikes: async (req, res) => {
        try {
            //Find film from filmID passed from request
            //Only update likes if < 1 mil
            await Film.findOneAndUpdate({_id:req.body.filmID, likes: {$lt: 1000000}},{
                //Increment likes by 1
                $inc: {
                    likes: 1
                }},
                {returnNewDocument: true}
            )
            console.log('Like added')
            res.json('Like added')
        } catch (err) {
            console.error(err)
        }
    }

}