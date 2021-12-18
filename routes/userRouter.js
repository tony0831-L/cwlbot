const express =require('express');
const router =express.Router();
const userModel = require('../dataModel/user')

router.get('/',(req,res)=>{
    userModel.users.find({},(err,docs)=>{
        if(!err){
            res.send(docs);
        }
    })
})

router.post('/addUser',(req,res)=>{
    userModel.users.create(req.body,err=>{
        if(!err){
            res.send(true);
        }else{
            res.send(false);
        }
    });
})

module.exports = router;