const express = require('express');
const router = express.Router();
const myWatchCtrl = require('../../controllers/api/mywatch')

// router.get('/mywatch/', moviesCtrl.getAlreadyWatchedMovies)
// router.get('/movies/', moviesCtrl.getNextWatchMovies)
router.post('/mywatch/:id', myWatchCtrl.addToMyWatch)
// router.get('/mywatch/', myWatchCtrl.getMyWatchItems)
// router.delete('/movies/', moviesCtrl.deleteFromMyMovies)

module.exports = router;