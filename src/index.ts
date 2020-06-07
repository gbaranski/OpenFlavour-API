import http from 'http';
import app from './app';

const httpPort = 1234;

const httpServer = http.createServer(app);
httpServer.listen(httpPort);
console.log(`Listening on port ${httpPort}`);
