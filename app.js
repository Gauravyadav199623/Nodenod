const express= require('express');
const bodyParser= require('body-parser')

const app=express()

app.use(bodyParser.urlencoded({extended:false}))

app.use('/add-product',(req,res,next)=>{
    console.log('in other middleware')
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add Product</button></form>')
    // next()// allow request to continue to next middleware in line
});
app.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})
app.use('/',(req,res,next)=>{
    console.log('in other middleware1')
    res.send('<h1>Hello from Express!</h1>')
});

// const server=http.createServer();

// server.listen(3000)
app.listen(3000)