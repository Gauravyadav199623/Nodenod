const express= require('express');

const app=express()

app.use((req,res,next)=>{
    console.log('in the middleWare')
    next()
});
app.use((req,res,next)=>{
    console.log('in other middleware')
    res.send('<h1>Hello from Express!</h1>')
})


// console.log(routes.someText)
// const server=http.createServer();

// server.listen(3000)
app.listen(3000)