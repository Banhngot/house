import express from "express";
import * as postControllers from "../controllers/post";
import verifyToken from "../middleware/verifyToken";

const router = express.Router();

router.get("/all", postControllers.getPost);
router.get("/limit", postControllers.getPostLimit);
router.get("/new-post", postControllers.getNewPosts);

router.use(verifyToken);
router.post("/create-new", postControllers.createNewPosts);
router.get("/limit-admin", postControllers.getPostLimitAdmin);
router.put("/update", postControllers.updatePost);
router.delete("/delete", postControllers.deletePost);
export default router;
