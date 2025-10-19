import express from 'express';
import authMiddleware from '../middlewares/auth.js';
import { listOrders, placeOrder, updateStatus, userOrders, verifyOrder } from '../controllers/orderController.js';
import wrapAsync from '../utils/wrapAsync.js';

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, wrapAsync(placeOrder));
orderRouter.post("/verify", wrapAsync(verifyOrder));
orderRouter.post("/userorders", authMiddleware, wrapAsync(userOrders));
orderRouter.get("/list", wrapAsync(listOrders));
orderRouter.post("/status", wrapAsync(updateStatus));


export default orderRouter;