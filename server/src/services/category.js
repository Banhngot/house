import db from "../models";

// Get all category
export const getCategoriesService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.findAll({ raw: true });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "ok" : "fail",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
