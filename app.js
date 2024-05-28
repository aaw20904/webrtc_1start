const https = require("https");
const express = require("express");
const fs = require("fs")
const app = express();
let options = {
   key:  fs.readFileSync("andriiwebsites_click.key"),
   cert: fs.readFileSync("andriiwebsites_click.crt")
}

app.use(express.static("public"));

app.get("/help",(req,res)=>{
    res.json({time:new Date().toLocaleTimeString()});
})

let server = https.createServer(options, app);

// Handle server errors
server.on('error', (err) => {
    console.error('Server error:', err);
});

server.listen(443,()=>console.log("https Server listen on port 443..")); 
////https://www.youtube.com/watch?v=YWLYGoMZHRg&list=PLF_SZiztoCWHJAohyZKl8QnXYUHLeh11t&index=5
