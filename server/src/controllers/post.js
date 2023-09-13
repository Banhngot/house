import * as postService from "../services/post";

export const getPost = async (req, res) => {
  try {
    const response = await postService.getPostService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "fail at post controller" + error,
    });
  }
};

export const getPostLimit = async (req, res) => {
  const { page, priceNumber, areaNumber, ...query } = req.query;

  try {
    const response = await postService.getPostLimitService(page, query, {
      priceNumber,
      areaNumber,
    });
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "fail at post controller" + error,
    });
  }
};

export const getNewPosts = async (req, res) => {
  try {
    const response = await postService.getNewPostService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "fail at post controller" + error,
    });
  }
};

export const createNewPosts = async (req, res) => {
  try {
    const { categoryCode, title, priceNumber, areaNumber, label } = req.body;
    const { id } = req.user;
    if (!categoryCode || !id || !title || !priceNumber || !areaNumber || !label)
      return res.status(400).json({
        err: 1,
        msg: "Missing input",
      });
    const response = await postService.createNewPostsService(req.body, id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "fail at post controller" + error,
    });
  }
};
