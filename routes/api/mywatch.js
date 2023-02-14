const express = require('express');
const router = express.Router();
const myWatchCtrl = require('../../controllers/api/mywatch')
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// router.get('/mywatch/', moviesCtrl.getAlreadyWatchedMovies)
// router.get('/movies/', moviesCtrl.getNextWatchMovies)
router.post('/mywatch/:id', ensureLoggedIn,   myWatchCtrl.addToMyWatch)
router.get('/mywatch', ensureLoggedIn, myWatchCtrl.getWatched)
router.put('/', myWatchCtrl.getMyWatch)
router.delete('/:id',ensureLoggedIn,  myWatchCtrl.deleteFromMyWatch)
router.post('/:id/comment', ensureLoggedIn, myWatchCtrl.addComment)
router.get('/:id/comment', ensureLoggedIn, myWatchCtrl.getComments)
// router.delete('/movies/', moviesCtrl.deleteFromMyMovies)

module.exports = router;