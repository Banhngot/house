import { dataPrice, dataArea } from "../ultils/data";
import { v4 } from "uuid";
import db from "../models";

export const createPricesAndAreas = () =>
  new Promise((resolve, reject) => {
    try {
      dataPrice.forEach(async (item) => {
        await db.Price.create({
          id: v4(),
          code: item.code,
          value: item.value,
        });
      });
      dataArea.forEach(async (item) => {
        await db.Area.create({
          id: v4(),
          code: item.code,
          value: item.value,
        });
      });
      resolve("OK");
    } catch (err) {
      reject(err);
    }
  });
