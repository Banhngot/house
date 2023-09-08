import db from "../models";

// Get user current
export const getOne = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: { id },
        raw: true,
        attributes: {
          exclude: ["password"],
        },
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "ok" : "fail",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
