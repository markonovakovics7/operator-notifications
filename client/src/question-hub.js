import { HubConnectionBuilder, LogLevel } from '@aspnet/signalr'
export default {
  install (Vue) { //eslint-disable-line
    const connection = new HubConnectionBuilder()
      .withUrl('https://localhost:5001/notification-hub/negotiate?negotiateVersion=1')
      .configureLogging(LogLevel.Information)
      .build()
 
    connection.start()
  }
}