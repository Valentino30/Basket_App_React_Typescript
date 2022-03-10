import { nanoid } from "nanoid";

import { Item } from "../types/item";

export const currency = "$";

export const initialItems = [
  {
    id: nanoid(),
    price: 2,
    quantity: 2,
    name: "Mountain Dew",
  },
  {
    id: nanoid(),
    price: 3,
    quantity: 6,
    name: "Desperados",
  },
  {
    id: nanoid(),
    price: 4,
    quantity: 4,
    name: "Jack Daniels",
  },
];

export const calculateTotalCost = (items: Item[]) => {
  return items
    .map((item) => item.price * item.quantity)
    .reduce((prev, curr) => prev + curr, 0);
};
