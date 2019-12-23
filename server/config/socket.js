const socket = require('socket.io');
const mongoose =  require('mongoose');
const Message = require('../models/MessageModel');
const User = require('../models/UserModel');
function init(server) {
    const io = socket(server);
    io.on('connection', (socket) => {
        socket.on('addUser',function(data){
           console.log('dodat juzer', data);
          socket.emit('addUser',data);
        });

           
          // Handle chat event
        socket.on('chat', function(data){
            console.log('from chat',data);
          /*  const newMessage    =  new Message;
            newMessage.name     = data.name;
            newMessage.message  = data.message;
            newMessage.type     = data.type;
            newMessage.userId  = data.userId;
            newMessage.save(); 
            */
              socket.broadcast.emit('chat', data);
             // data.user_id = '1art345'; // TO DO
             // message.create(data);
          });
      /*    Message.getAll().then((data) =>{
             socket.emit('output', data);
        });  */
      
      /*   Message.find({}, function(err, users) { 
          socket.emit('output', users);
      
        }); */
          const userMap = {};
      
        
          // Handle typing event
          socket.on('typing', function(data){
              socket.broadcast.emit('typing', data);
          });
          socket.on('stopTyping', function(data){
              socket.broadcast.emit('typing', data);
          });
      
      
      
         
        // const users =  User.find({}).toArray();
         /*   const users =  User.find({})
            so */

            User.find({}, function(err, users) {
                socket.emit('getUsers', users);
             });
      
      });
}

module.exports = {
  init
};