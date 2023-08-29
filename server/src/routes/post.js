import express from "express";
import * as postControllers from "../controllers/post";

const router = express.Router();

router.get("/all", postControllers.getPost);
router.get("/limit", postControllers.getPostLimit);

export default router;
