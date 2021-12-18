var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const res=new Schema({
    owner:String,
    name:String,
    add:String,
    img:String,
    cat:String,
    star:Number,
    menu:Array,
})

module.exports.restaurants =mongoose.model("restaurants",res);
