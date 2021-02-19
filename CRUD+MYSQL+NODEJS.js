
const mysql=require('mysql')
var express = require('express')
var app = express()
const port = 4000
var bodyParser = require('body-parser');
app.use(bodyParser.json());


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database:"student"
});

con.connect((err)=> {
    if(!err){
        console.log("DB connection success")// check the DB connection
    }else {
        console.log("DB connection Failed" +JSON.stringify(err,undefined,2))}//error in json formaT
     
});
  app.get('/',function(req,res)// request and get the whole resul
  {
      con.query("select * from stud",function(err,result)
      {
          res.send(result);
      })
  })
  app.get('/:id',function(req,res)// get the specific id result
  {
      con.query("select * from stud where id=?",[req.params.id],function(err,result)
      {
          res.send(result);
      })
  })
  app.post('/',function(req,res)//insert the new  data values
  {
      let sql="insert into stud (Id,Name,Department,College) values('"+req.body.Id+"','"+req.body.Name+"','"+req.body.Department+"','"+req.body.College+"')";
      
      console.log('sql => ',sql)
     con.query(sql,function(err,result){
      res.send(result);
  });
});
app.put('/:id',function(req,res){//id found then start the update function
  let id = parseInt(req.params.id);
  console.log('req ',req.body);
  
  let sqlQuery = "update stud set Name ='"+req.body.Name+"' where Id = '"+id+"'";
  console.log('sqlQuery => ',sqlQuery)
  con.query(sqlQuery,function(err,result){
    res.send(result);
});
});

  app.delete('/:id',function(req,res)// delete the value in database
  {
      con.query("delete from stud where id=?",[req.params.id],function(err,result)
      {
          res.send(result);
      })
  })

  app.listen(port, () => {
    console.log(`Running Successfully`);
      })
    