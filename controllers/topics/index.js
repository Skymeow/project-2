const express = require('express');
const router = express.Router();
const controller = require('./controller');
router.get ('/',controller.index);
router.get('/:id',controller.show);
router.put('/:id',controller.updatecomment);
router.get('/new',controller.new);
router.post('/',controller.save);
module.exports = router;
