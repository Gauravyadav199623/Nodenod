const  express=require('express');

const path=require('path')

const rootDir=require('../util/path');

const router= express.Router();


router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views",'shop.html'))// goes to folder, up one level,in views folder,shop file
});

module.exports=router