import express from "express";
import createClientValidator from '../middlewares/createClientValidator.js';
import * as clientController from '../controllers/clientController.js';

const router = express.Router();

router
  .route('/client')
  .post(createClientValidator, clientController.createClient);


export default router;
