const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
    userId: { type:String, required:true},
    name: {type: String, required:true},
    manufacturer:{type:String},
    description:{type:String},
    mainPepper:{type:String},
    imageUrl:{type:String},
    heat:{type:Number},
    likes:{type:Number},
    dislikes:{type:Number},
    userLiked:{type:Array},
    userDisliked:{type:Array}
})

module.exports = mongoose.model('Sauces',sauceSchema);