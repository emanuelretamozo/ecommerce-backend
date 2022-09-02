import express from 'express';
import clientRoutes from './routes/clientRoutes.js';
import loginRoutes from './routes/loginRoutes.js';
import managerRoutes from './routes/managerRoutes.js';
import sellerRoutes from './routes/sellerRoutes.js';

const api = express();
api.use(express.json());

//TODO: registrar middlewares y rutas

api.get('/status', (_, res) => {
  return res.json({
    msg: 'API funcionando',
  });
});

api.use(clientRoutes);
api.use(loginRoutes);
api.use(managerRoutes);
api.use(sellerRoutes);

export default api;
