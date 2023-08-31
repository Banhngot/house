// import * as authService from "../services/auth";
// import * as insertService from "../services/insert";
import * as createpriceService from "../services/createprice";

export const createprice = async (req, res) => {
  try {
    const response = await createpriceService.createPricesAndAreas();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Fail at auth controller " + error,
    });
  }
};
