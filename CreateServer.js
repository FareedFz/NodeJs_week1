console.log('Done');
var http=require('http');
http.createServer(function(req,res){
    
    res.write("welcome back to our server\n Start the node ")
    res.end();
})
listen(4024);
console.log('Done');