const server = require('./server');

const PORT = 5000;

server.listening(PORT, () => {
  console.log(`Listening on localhost:${PORT} ...`);
})