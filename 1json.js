// const name = ('john') 
// console.warn(`do not track ${name}! do not track! `);
// console.log("hello world")
// //console.error(new Error('helthis is wrong method.'))
// console.error(new Error('Hell! This is a wrong method.'));  
//console.log(__filename);

var fs = require("fs");  
var data = 'this is the new node.js created by me in this session  ';  
 
var readerStream = fs.createReadStream('basic');    
readerStream.setEncoding('UTF8');  
  
readerStream.on('data', function(chunk) {  
   data += chunk;  
});  
readerStream.on('end',function(){  
   console.log(data);  
});  
readerStream.on('error', function(err){  
   console.log(err.stack);  
});  
console.log("Program Ended");  
