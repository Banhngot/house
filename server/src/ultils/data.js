import generateCode from "./generateCode";

export const prices = [
  {
    min: 0,
    max: 1,
    value: "Dưới 1 triệu",
  },
  {
    min: 1,
    max: 2,
    value: "Từ 1 - 2 triệu",
  },
  {
    min: 2,
    max: 3,
    value: "Từ 2 - 3 triệu",
  },
  {
    min: 3,
    max: 5,
    value: "Từ 3 - 5 triệu",
  },
  {
    min: 5,
    max: 7,
    value: "Từ 5 - 7 triệu",
  },
  {
    min: 7,
    max: 10,
    value: "Từ 7 - 10 triệu",
  },
  {
    min: 10,
    max: 99999,
    value: "Trên 10 triệu",
  },
];

const area = [
  {
    min: 0,
    max: 20,
    value: "Dưới 20m",
  },
  {
    min: 20,
    max: 30,
    value: "Từ 20m - 30m",
  },
  {
    min: 30,
    max: 50,
    value: "Từ 30m - 50m",
  },
  {
    min: 50,
    max: 70,
    value: "Từ 50m - 70m",
  },
  {
    min: 70,
    max: 100,
    value: "Từ 70m - 100m",
  },
  {
    min: 100,
    max: 99999,
    value: "Trên 100m",
  },
];

export const dataPrice = prices.map((item) => ({
  ...item,
  code: generateCode(item.value),
}));

export const dataArea = area.map((item) => ({
  ...item,
  code: generateCode(item.value),
}));
