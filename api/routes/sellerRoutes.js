import express from "express";
import createSellerValidator from '../middlewares/createSellerValidator.js';
import * as sellerController from '../controllers/sellerController.js';

const router = express.Router();

router
  .route('/seller')
  .post(createSellerValidator, sellerController.createSeller);


export default router;
