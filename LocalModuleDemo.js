console.log(__filename);//shows file location
console.log(__dirname);
const path=require('path');
const path1=path.parse(__filename)//return an object whose property reference the path;
console.log(path1);
const os=require('os');//for operating system
var totalMemory=os.totalmem();
var freememory=os.freemem();
console.log("totalMemory :"+totalMemory);
//total and free memory
console.log("freeMemory "+freememory);


function guest(stay){
     console.log("Guest stay in  "+stay)

}
module.exports.log=guest;