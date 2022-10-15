const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/moviesController');


router
    .post('/api/movies/create',moviesController.create)
    .delete('/api/movies/delete/:id',moviesController.destroy)

module.exports = router