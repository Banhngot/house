import express from "express";
import * as createpriceController from "../controllers/createprice";

const router = express.Router();
router.post("/", createpriceController.createprice);

export default router;
