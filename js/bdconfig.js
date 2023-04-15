
var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"gfg"
})
con.connect(function(err){
    if(err) throw err;
    console.log("Connected");

    var sql1="CREATE TABLE tableone" +"(id INT AUTO_INCREMENT PRIMARY KEY,"
    + " nombre INTEGER, prix DOUBLE()";
  
    var ssql11= "INSERT INTO tanleone(nombre,"+"prix) values('120',"+"'200')";
    
con.query(sql1,function(err,result){
    if(err) throw err;
    console.log("table created");
})
con.query(ssql11 ,function(err,result){
    if(err) throw err;
    console.log("INSERTION successful");
});
});

