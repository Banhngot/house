export const getNumberFromString = (string) => {
  let price = 0;
  if (string.search("đồng/tháng") !== -1) {
    price = +string.match(/\d+/)[0] / Math.pow(10, 3);
  } else if (string.search("triệu/tháng") !== -1) {
    price = +string.match(/\d+/)[0];
  }
  return price;
};
