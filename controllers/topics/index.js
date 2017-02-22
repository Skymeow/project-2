const express = require('express');
const router = express.Router();
const controller = require('./controller');
router.post('/',controller.save);
router.get('/new',controller.newtopic);
router.get ('/',controller.index);
router.get('/:id',controller.show);
router.post('/:id',controller.newcomment);

router.put('/:id/vote/',controller.vote);
module.exports = router;
