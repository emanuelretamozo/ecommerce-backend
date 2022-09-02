import express from "express";
import createManagerValidator from '../middlewares/createManagerValidator.js';
import authValidator from "../middlewares/authValidator.js";
import * as managerController from '../controllers/managerController.js';

const router = express.Router();

router
  .route('/manager')
  .post(createManagerValidator, authValidator, managerController.createManager);


export default router;
