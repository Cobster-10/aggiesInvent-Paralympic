const http = require('http');
const os = require('os-utils');
const socketIO = require('socket.io');

// Create the server instance
const server = http.createServer();

// Create the Socket.IO instance and pass the server instance to it
const io = socketIO(server, {
  transports: ['websocket', 'polling']
});

let tick = 0;

// Listen for socket connections
io.on('connection', client => {
  // Emit a 'cpu' event to the client every second
  const intervalId = setInterval(() => {
    os.cpuUsage(cpuPercent => {
      client.emit('cpu', {
        name: tick++,
        value: cpuPercent
      });
    });
  }, 1000);

  // Clean up the interval when the client disconnects
  client.on('disconnect', () => {
    clearInterval(intervalId);
  });
});

// Export the server instance
module.exports = server;
