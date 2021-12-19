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
                message:"操作過於頻繁,請稍後在試,如重複出現請通知技術人員"
            })
        }
    }
    regi();
})

router.post('/sign',(req,res)=>{
    userModel.users.find({name:req.body.name},(err,docs)=>{
        if(!err){
            if(docs.length){
                docs.forEach(el=>{
                    if (el.pass==req.body.pass) {
                        res.send({
                            stat:true,
                            message:"登入成功"
                        });
                    }else{
                        res.send({
                            stat:false,
                            message:"密碼錯誤"
                        }); 
                    }
                })
            }else{
                res.send({
                    stat:false,
                    message:"帳號不存在,請先完成註冊"
                });  
            }
        }else{
            res.send({
                stat:false,
                message:"伺服器錯誤,請聯繫技術人員"
            }); 
        }
    });
})

router.delete('/del')
router.post('/findResByName',(req,res)=>{
    resModel.restaurants.find({owner:req.body.name},(err,docs)=>{
        if(!err){
            res.send({
                stat:true,
                data:docs,
                message:"查詢成功"
            });
        }else{
            res.send({
                stat:false,
                data:"error",
                message:"伺服器錯誤,請聯繫技術人員"
            });
        }
    });
})

module.exports = router;