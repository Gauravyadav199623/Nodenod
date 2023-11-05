const http=require('http');
const fs=require('fs')

const server=http.createServer((req, res)=>{
    // console.log("yourName")
    const url=req.url
    const method=req.method
    if(url==="/"){
        let message = fs.readFileSync('message.txt', 'utf8');
        res.write("<html>");
        res.write("<head><title>Enter Message</title></head>")
        res.write(`<body><h1>${message}</h1>`)
        res.write('<body><form action="/message"  method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write("</html>")
        return res.end()
    }
    if(url==='/message' && method==='POST'){
        const body=[]
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',()=>{
            const parseBody=Buffer.concat(body).toString();
            console.log(parseBody)
            const message=parseBody.split('=')[1]
            
            res.write(message)

        })
        
        // res.writeHead(302,{}) //302 stand for re direction
        res.statusCode=302;
        res.setHeader('location','/')
        return res.end();
    }
    // if(url==="/home"){
    //     res.write("<html>");
    //     res.write("<head><title>Enter Message</title></head>")
    //     res.write('<body><h1>Welcome Home<h1></body>')
    //     res.write("</html>")
    //     return res.end()
    // }
    // if(url==="/about"){
    //     res.write("<html>");
    //     res.write("<head><title>Enter Message</title></head>")
    //     res.write('<body><h1>Welcome About Us page<h1></body>')
    //     res.write("</html>")
    //     return res.end()
    // }
    // if(url==="/node"){
    //     res.write("<html>");
    //     res.write("<head><title>Enter Message</title></head>")
    //     res.write('<body><h1>Welcome My Nodejs Project<h1></body>')
    //     res.write("</html>")
    //     return res.end()
    // }
    res.setHeader('content-type','text/html');
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>")
    res.write("<body><h1>Hello From My Node.js Server</h1></body>")
    res.write("</html>")
    res.end() //remember to exit app.js then enter again to see the changes
    // process.exit()
});
server.listen(4000)