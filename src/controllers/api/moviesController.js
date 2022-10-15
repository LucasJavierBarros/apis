const db = require('../../database/models');
const sequelize = db.sequelize;

const moviesController = {
    create: async (req,res)=>{
        try {

            let movie = await db.Movie.create(req.body)
            return res.status(200).json({
                data:movie,
                status:200
            })
        } catch (error) {
            console.log(error)
        }
    },
    destroy: async (req,res)=>{
        try {

            let movie = await db.Movie.destroy({
                where: {id:req.params.id}
            })
            return res.status(200).json({
                data:movie,
                status:200
            })
        } catch (error) {
            console.log(error)
        }
    },
    
}


module.exports = moviesController