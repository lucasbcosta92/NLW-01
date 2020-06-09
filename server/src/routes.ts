import express from 'express';
import { celebrate, Joi } from 'celebrate';
// upload
import multer from 'multer';
import multerConfig from './config/multer';
// controllers
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

// Listagem de items
routes.get('/items', itemsController.index);
// Listagem dos pontos que se adequarem aos filtros preenchidos (UF/Cidade/Items)
routes.get('/points', pointsController.index);
// Listagem de um ponto de coleta especifico
routes.get('/points/:id', pointsController.show);
// Criação de ponto de coleta (com o upload de imagem do estabelecimento)
routes.post(
  '/points',
  upload.single('image'),
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().required().max(2),
      items: Joi.string().required(),
    }),
  }, {
    abortEarly: false,
  }),
  pointsController.create,
);

export default routes;