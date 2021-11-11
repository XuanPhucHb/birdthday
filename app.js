const express = require('express'); 
const app = express(); 
const port = 8000; 
const fs = require("fs");
const path = require('path');

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname+'/index.html'));
})
app.use(express.static(path.join(__dirname)))

app.get('/users', function(req, res){
	res.send('<div class="users"><table><thead><tr><th> Name </th><th> Email </th></tr></thead><tbody><tr><td> User1 </td><td> user1@gmail.com </td></tr><tr><td> User2 </td><td> user2@gmail.com </td></tr></tbody></table></div>')
})

app.listen(port, function(){
    console.log("Your app running on port " + port);
})