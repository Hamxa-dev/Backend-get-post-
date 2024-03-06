import express from "express";
import Orders from "../models/order.mjs";
const route = express.Router();


route.get("/", async (req, res) => {
  try {
    const orders = await Orders.find({});
    res.send({ orders: orders });
  } catch (error) {
    res.status(404).send({ message: "orders not found", error: error });
  }
});


route.post("/add", async (req, res) => {
  try {
    const orders = await Orders.create(req.body);
    res.status(202).send({ message: "order added successfully" });
  } catch (error) {
    res.status(404).send({ message: "order not added", error: error });
  }
});


export default route;
