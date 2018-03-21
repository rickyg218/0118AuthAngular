const Schema = require ("mongoose").Schema;

const albumSchema = new require ("mongoose").Schema({
    owner:{ type:Schema.Types.ObjectId, ref:"User"},
    title:{
        type:String,
        required:true
    },
    photos:[
        {
            type:Schema.Types.ObjectId,
            ref:'Photo'
        }
    ]
},
    {
        timestamps:{
            createdAt:"created_at",
            updatedAt:"updated_at"
    }
})

module.exports = require("mongoose").model("Album", albumSchema);