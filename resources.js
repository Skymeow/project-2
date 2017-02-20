const express =require('express');
const router = express.Router();

router.use('/topics', require('./controllers/topics'));
router.use('/comments', require('./controllers/comments'));

module.exports = router;
