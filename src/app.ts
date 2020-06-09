import express from 'express';
import apiRoutes from './routes';

const app = express();
app.use('/api', apiRoutes);

export default app;
