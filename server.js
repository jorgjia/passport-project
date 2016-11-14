var express=require('express');
var bodyparser=require('body-parser');

var app=express();
app.use(express.static("public"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
	extended:true
}));

app.post("/", function(req,res){
	var username=req.body.username;
	var password=req.body.password;
	console.log(username);
	console.log(password);	
});

app.listen(7040);