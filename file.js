

const fs = require('fs')

/*
const http = require('http')
const server = http.createServer(function(req,res){
    res.write('<h1>hello world</h1>');
    res.end;
})
server.listen(4000 , (err)=>{
    err? console.log(err) : console.log('success')
});*/

fs.writeFile('welcome.txt', 'Hello node ', (err)=>{
    if(err)(console.log(err))
    else(console.log('ok'))
});
fs.readFile('welcome.txt',(err,file)=>{
    err? console.log(err):console.log(file.toString())
})




