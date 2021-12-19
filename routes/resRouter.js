const express =require('express');
const router =express.Router();
const resModel = require('../dataModel/restaurant.js')

async function getInfo(){
    let info
    await resModel.restaurants.find({},(err,docs)=>{
        if(!err){
            info = docs;
        }else{
            throw err;
        }
    }).clone();
    return info;
}

router.get('/test',(req,res) => {
    getInfo().then(data=>{
        res.send(data);
    })
    
})

router.post('/addRes',(req,res)=>{
    let data = req.body;
    resModel.restaurants.create(data,err=>{
        if(!err){
            res.send(true);
        }else{
            res.send(false);
        }
    });
})

router.delete('/delRes',(req,res)=>{
    resModel.restaurants.findByIdAndDelete(req.body.id,err=>{
        if(!err){
            res.send(true);
        }else{
            res.send(false);
        }
    });
})

router.put('/editRes',(req,res)=>{
    resModel.restaurants.findByIdAndUpdate(req.body.id,req.body.data,(err,docs)=>{
        if(!err){
            res.send("修改成功! 現在資料:"+docs);
        }else{
            res.send(false)
        }
    })
})

router.put('/findResByName',(req,res)=>{
    resModel.restaurants.find({owner:req.body.owner},(err,docs)=>{
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