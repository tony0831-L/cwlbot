var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const users=new Schema({
    name:String,
    pass:String,
    img:String,
})

const history = new Schema({
    res:String,
    consumer:String,
    list:Array,
    time:String,
    star:String,
    Comment:String
})

module.exports.users =mongoose.model("users",users);
module.exports.history =mongoose.model("history",history);