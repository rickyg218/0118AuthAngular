
var express = require('express');
var router = express.Router();
const controller = require("../controllers/photo.controller");

var multer  = require('multer')
var upload = multer({ dest: './public/uploads/' });
 


router.get('/', controller.getPhoto);
router.post('/newPhoto/:idAlbum', upload.any(), controller.postPhoto);
router.patch('/:id', controller.patchPhoto);
router.delete('/:id', controller.deletePhoto);

module.exports = router;

