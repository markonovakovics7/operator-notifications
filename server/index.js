const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const socket = require('./notification');

const cors = require('cors');


app.use(bodyParser.json());
/* var io = require('socket.io')(http); */

app.use(cors());

app.get('/', function(req, res){
    console.log('test')
  res.send('test')
});
/* 
io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(5001, function(){
  console.log('listening on *:5001');
}); */


const PORT = process.env.PORT || 5001;
const server = app.listen(PORT, () =>{
    console.log(`Server started on port ${PORT}`);
});

/* 
var server = app.listen(4000, function(){
  console.log('listening for requests on port 4000,');
}); */

socket.init(server);