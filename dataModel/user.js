var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const users=new Schema({
    name:String,
    pass:String,
    img:String,
})

const history = new Schema({
    resta:String,
    user:String,
    dishes:Array
})

module.exports.users =mongoose.model("users",users);