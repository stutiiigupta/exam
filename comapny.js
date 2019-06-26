var express= require('express');
var app=express();

var companyController=function(req,resp)
{
console.log("human resources solution");
var company=[ 
{company:'Amazon',NoOfEmp:20000,headquaters:'london'},
{company:'google',NoOfEmp:100000,headquaters:'newyork'},
{company:'Rockwell',NoOfEmp:5000,headquaters:'singapore'},
{company:'Honeywell',NoOfEmp:20000,headquaters:'canada'}
];
resp.send(company);
};

app.get('/company',companyController);

var server=app.listen(8080,function(){
	var host=server.address().address;
	var port=server.address().port;
	console.log("server is running on https:localhost:8080",host,port);
})