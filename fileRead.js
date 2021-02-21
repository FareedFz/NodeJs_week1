var FileSystem=require('fs');
FileSystem.readFile('ChainPromise.js','utf8',function(err,data){//utf8 is for encoded file to data;  
    console.log(data);
})
FileSystem.writeFile('calc1.js','console.log("hi i am fareed Creating New file")',function(err){
    //if you write in already existing file ,that file can be replaceable for this content and old content will be deleted
      console.log('Data Created');
})
FileSystem.appendFile('calc1.js','console.log("i am new content in this file")',function(err){
console.log("succesfully appended");
})
  