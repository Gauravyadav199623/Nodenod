const fs=require('fs');



const requestHandler=(req,res)=>{
    const url=req.url
    const method=req.method
    if(url==="/"){
        // let message = fs.readFileSync('message.txt', 'utf8');
        fs.readFile('message.txt',{encoding: "utf-8"},(err,data)=>{ //? if we dont use if else(also on the last section of the code) or return the last part of the code will run as the this part is asynchronous
            if(err){
                console.log(err)
            }
            res.write("<html>");
            res.write("<head><title>Enter Message</title></head>")
            res.write(`<body><h1>${data}</h1></body>`)
            res.write('<body><form action="/message"  method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
            res.write("</html>")
            return res.end()
        })
    }
    else if(url==='/message' && method==='POST'){
        const body=[]
        req.on('data',(chunk)=>{
            //data will come in chunks 
            console.log(chunk);
            body.push(chunk);
        });
        // ?when the last part of data will come with an event called "end"
        return req.on('end',()=>{
            
            const parseBody=Buffer.concat(body).toString();
            console.log(parseBody)
            const message=parseBody.split('=')[1]
            console.log(message)
            
            fs.writeFile('message.txt',message,(err)=>{ // ?(which file to write to.txt, what to write, ()=>what to do after every thing is been written )
                // res.writeHead(302,{}) //302 stand for re direction
                res.statusCode=302;
                res.setHeader('location','/')//!redirecting user to "/"
                return res.end();
            });
            
        })
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
     else {
    
        res.setHeader('content-type','text/html');
        res.write("<html>");
        res.write("<head><title>My First Page</title></head>")
        res.write("<body><h1>Hello From My Node.js Server</h1></body>")
        res.write("</html>")
        res.end() //remember to exit app.js then enter again to see the changes
        // process.exit()
    }
}
// module.exports=requestHandler
//or
// module.exports={
//     handler:requestHandler,
//     someText:"Some HARD CODED text"
// };
//or
module.exports.handler=requestHandler
module.exports.someText="Some HARD CODED text"
// we can also emit module

// exports.handler=requestHandler
// exports.someText="Some HARD CODED text"