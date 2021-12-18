const express =require('express');
const router =express.Router();
const userModel = require('../dataModel/user')

router.get('/',(req,res)=>{
    userModel.users.find({},(err,docs)=>{
        if(!err){
            console.log(docs)
        }
    })
    res.end()
})

module.exports = router;