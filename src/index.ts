import http from 'http';
import app from './app';

const httpServer = http.createServer(app);
httpServer.listen(process.env.PORT);
console.log(`Listening on port ${process.env.PORT}`);
