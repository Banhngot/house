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
