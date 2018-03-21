var express = require('express');
var router = express.Router();
const controller = require("../controllers/Album.controller");

router.get('/', controller.getAlbum);
router.post('/new', controller.postAlbum);
router.patch('/:id', controller.patchAlbum);
router.delete('/:id', controller.deleteAlbum);

module.exports = router;