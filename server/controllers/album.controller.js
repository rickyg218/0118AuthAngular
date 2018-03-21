const Album = require("../models/album");
const Photo = require("../models/photo");
const User = require('../models/user');

exports.deleteAlbum = (req,res,next)=>{
  Album.findByIdAndRemove(req.params.id)
  .then(lists=>res.status(200).json(lists))
  .catch(e=>res.status(500).send(e));
}

exports.patchAlbum = (req,res,next)=>{
  Album.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(list=>res.status(200).json(list))
  .catch(e=>res.status(500).send(e));
}

exports.getAlbum = function(req, res, next) {
    Album.find({owner: req.user._id})
    .populate('photos')
    .then(myAlbums=>res.status(200).json(myAlbums))
    .catch(e=>res.status(500).send(e));
  }

exports.postAlbum = (req, res, next)=>{
    const newAlbum = new Album({
      title: req.body.title,
      owner: req.user._id
    });
    newAlbum.save()
        .then(AlbumCreated => {
          res.status(200).json(AlbumCreated)
        })

  }

  