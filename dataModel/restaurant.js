var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const res=new Schema({
    name:String,
    add:String,
    img:String,
    cat:String,
    star:Number,
    menu:Object,
})

module.exports.restaurants =mongoose.model("wm",res);
