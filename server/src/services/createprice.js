import { dataPrice, dataArea } from "../ultils/data";
import { v4 } from "uuid";
import db from "../models";

export const createPricesAndAreas = () =>
  new Promise((resolve, reject) => {
    try {
      dataPrice.forEach(async (item, index) => {
        await db.Price.create({
          code: item.code,
          value: item.value,
          order: index + 1,
        });
      });
      dataArea.forEach(async (item, index) => {
        await db.Area.create({
          code: item.code,
          value: item.value,
          order: index + 1,
        });
      });
      resolve("OK");
    } catch (err) {
      reject(err);
    }
  });
