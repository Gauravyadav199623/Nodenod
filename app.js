const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(res)
    console.log("yourName")
})
server.listen(4000)