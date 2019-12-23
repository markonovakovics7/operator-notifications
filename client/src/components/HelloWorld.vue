<template>
  <div class="hello container">
    <div v-if="output !== null">{{output.message}}</div>
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" class="form-control" v-model="name" placeholder="Enter Name" id="name">
  </div>
  <div class="form-group">
    <label for="message">Message:</label>
    <input type="text" v-model="message" class="form-control" placeholder="Enter Message" id="message">
  </div>
  <div class="form-group form-check">
    
  </div>
  <button type="submit" class="btn btn-primary" @click="sendMessage">Submit</button>
  </div>
</template>

<script>
import io from 'socket.io-client'; //eslint-disable-line
import {HubConnectionBuilder, signalR, LogLevel} from '@aspnet/signalr'; //eslint-disable-line
export default {
  name: 'HelloWorld',
  props: {
      msg: String
  },
  data(){
    return {
      name:'',
      message:'',
      socket:null,
      output:null,
      connection:"",
      messages:[]
    }
  },
   beforeCreate(){

   },
   created(){
     console.log(123); //eslint-disable-line
     this.connection = new HubConnectionBuilder()
         .withUrl('https://localhost:5001/notificationHub')
        .configureLogging(LogLevel.Information) 
        .build();
    // Listen to score changes coming from SignalR events
    
   /*  console.log(this) //eslint-disable-line
    const self = this;
    this.socket = io('http://localhost:5001');

      this.socket.on('chat', (data) => {
             self.output =  data.message
            }); 
 */

     },
      mounted() {
      // ---------
      // Call client methods from hub
      // ---------
      var thisVue = this;
      thisVue.connection.start();
      thisVue.connection.on("ReceiveMessage", function(user, message) {
        thisVue.messages.push({ user, message });
      });
    },
  methods:{
    sendMessage(){
      console.log('taknuto'); //eslint-disable-line
      //eslint-disable-next-line
      const data =  {
        name:this.name, 
        message:this.message
      }
       // this.socket.emit('chat', data);
       this.connection
            .invoke("SendMessage", data)
            .catch(function(err) {
              return console.error(err.toSting()); //eslint-disable-line
            });
        this.name = '';
        this.message = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
