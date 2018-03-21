const Photo = require("../models/photo.js");
const Album = require("../models/album.js")

exports.deletePhoto = (req,res,next)=>{
  Photo.findByIdAndRemove(req.params.id)
  .then(items=>res.status(200).json(items))
  .catch(e=>res.status(500).send(e));
}

exports.patchPhoto = (req,res,next)=>{
  Photo.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(item=>res.status(200).json(item))
  .catch(e=>res.status(500).send(e));
}

exports.getPhoto = function(req, res, next) {
    Photo.find()
    .then(items=>res.status(200).json(items))
    .catch(e=>res.status(500).send(e));
  }

  exports.postPhoto = (req, res, next) => {
    const photo = new Photo ({
      title:req.body.title,
      picPath:`/uploads/${req.files[0].filename}`,
      albumSite: req.params.idAlbum
    })
    photo.save()
      .then(photoCreated =>{
        console.log('saving photos into album')
        console.log(photoCreated)
        console.log(req.params.idAlbum) 
        Album.findByIdAndUpdate(req.params.idAlbum, { $push: { photos: photoCreated._id} }, {'new':true})
        .then(album=>{
          res.status(200).json(album);
        })

        
      })

  }

