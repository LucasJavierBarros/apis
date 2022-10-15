const db = require('../../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list': async (req, res) => {
    
        try {
            let genres = await db.Genre.findAll()
            return res.status(200).json({
                ok:true,
                meta:{
                    status : 200,
                    total : genres.length,
                    url : "api/genres"},
                data : genres,
        })
        } catch (error) {
            console.log(error);
        }
    },
    'detail': async (req, res) => {
    
            try {
                let detail = await db.Genre.findByPk(req.params.id)
                return res.status(200).json({
                    ok:true,
                    meta:{
                        status : 200,
                        url : "api/genres/detail"},
                    data : detail,
            })
            } catch (error) {
                console.log(error);
            }
    }

}

module.exports = genresController;