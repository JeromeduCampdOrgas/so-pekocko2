const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
    userId: { type:String, required:true},
    name: {type: String, required:true},
    manufacturer:{type:String},
    description:{type:String},
    mainPepper:{type:String},
    imageUrl:{type:String},
    heat:{type:Number},
    likes:{type:Number,required:false,default:0},
    dislikes:{type:Number,required:false,default:0},
    usersLiked:{type:Array},
    usersDisliked:{type:Array}
})

module.exports = mongoose.model('Sauce',sauceSchema);