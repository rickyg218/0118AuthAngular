const Schema = require("mongoose").Schema;

const photoSchema = new require("mongoose").Schema({
        albumSite: { type:Schema.Types.ObjectId, ref:"Album"},
        title:{
            type:String,
            required:true
        },
        picPath: {
            type:String
        }   
},
{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }

});

module.exports = require("mongoose").model("Photo", photoSchema);

