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

module.exports = router;