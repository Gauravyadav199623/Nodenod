const express=require('express');

const router=express.Router();


//  /admin/add-product==>GET
router.get('/add-product',(req,res,next)=>{
    console.log('in other middleware')
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add Product</button></form>')
    // next()// allow request to continue to next middleware in line
});

// /admin/add-product==>POST
router.post('/add-product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

module.exports=router