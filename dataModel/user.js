var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const users=new Schema({
    name:String,
    add:String,
    img:String,
    history:Array
})

module.exports.restaurants =mongoose.model("users",users);