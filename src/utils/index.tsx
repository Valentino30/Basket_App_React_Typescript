import { nanoid } from "nanoid";

export const initialItems = [
  {
    id: nanoid(),
    price: 2,
    quantity: 2,
    currency: "$",
    name: "Mountain Dew",
  },
  {
    id: nanoid(),
    price: 3,
    quantity: 6,
    currency: "$",
    name: "Desperados",
  },
  {
    id: nanoid(),
    price: 4,
    quantity: 4,
    currency: "$",
    name: "Jack Daniels",
  },
];
