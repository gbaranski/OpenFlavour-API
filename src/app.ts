import express from 'express';
import apiRoutes from './routes/api-routes';

const app = express();
app.use('/api', apiRoutes);

export default app;
