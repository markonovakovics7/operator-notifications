using System;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace SignalRNotifications.Hubs
{
    public class NotificationHub : Hub
    {
        public NotificationHub()
        {
        }

        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}
