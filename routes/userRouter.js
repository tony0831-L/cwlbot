const express =require('express');
const router =express.Router();
const userModel = require('../dataModel/user')
const resModel = require('../dataModel/restaurant.js')

async function checkRepeat(name){
    let num ; 
    await userModel.users.find({name:name},(err,docs)=>{
        if(!err){
            num =  docs;
        }
    }).clone()
    return num;
    
}

router.get('/',(req,res)=>{
    userModel.users.find({},(err,docs)=>{
        if(!err){
            res.send(docs);
        }
    })
})

router.post('/regi',(req,res)=>{
    async function regi(){
        let num = await checkRepeat(req.body.name),message,stat;
        if(num){
            if(num.length>=1){
                message = "名稱重複";
                stat = false;
            }else{
                message = "註冊成功";
                userModel.users.create(req.body,err=>{
                    if(!err){
                        stat = true;
                    }else{
                        stat = false;
                    }
                });
            }
            res.send({
                num:num.length,
                build:stat,
                message:message
            })
        }else{
            build = false;
            res.send({
                num:"err",
                build:stat,
                message:"操作過於頻繁,請稍後在試"
            })
        }
    }
    regi();
})

router.post('/sign',(req,res)=>{
    userModel.users.find({name:req.body.name},(err,docs)=>{
        if(!err){
            docs.forEach(el=>{
                if (el.pass==req.body.pass) {
                    res.send(true);
                }
            })
        }else{
            res.send(false);
        }
    });
})

router.post('/findResByName',(req,res)=>{
    resModel.restaurants.find({owner:req.body.name},(err,docs)=>{
        if(!err){
            res.send(docs);
        }else{
            res.send(false);
        }
    });
})

module.exports = router;