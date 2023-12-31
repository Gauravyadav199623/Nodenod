const express= require('express');
const bodyParser= require('body-parser');
const path=require('path')

const app=express();

const adminRoutes= require('./routes/admin');
const shopRoutes= require('./routes/shop');
const contactRoutes=require('./routes/contact');

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use('/contactus',contactRoutes);
app.use(shopRoutes);

app.use('/success',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','success.html'))
    
})



app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})


// const server=http.createServer(app);

// server.listen(3000)
app.listen(3000)