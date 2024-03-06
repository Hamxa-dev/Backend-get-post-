import express from "express";
import orders from "./order.mjs";
const router = express.Router();

router.use("/orders", orders);


export default router;
