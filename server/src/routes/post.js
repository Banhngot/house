import express from "express";
import * as postControllers from "../controllers/post";

const router = express.Router();

router.get("/all", postControllers.getPost);

export default router;
