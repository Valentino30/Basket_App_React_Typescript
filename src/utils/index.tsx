import { nanoid } from "nanoid";

import { Currency, Item } from "../types/item";

export const currency = {
  country: "en-US",
  currency: "USD",
};

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

export const costInLocalCurrency = (
  cost: number,
  { country, currency }: Currency
) => {
  const costInLocalCurrency = new Intl.NumberFormat(country, {
    style: "currency",
    currency: currency,
  }).format(cost);

  return costInLocalCurrency;
};
export const totalCostInLocalCurrency = (
  items: Item[],
  { country, currency }: Currency
) => {
  const totalCost = items
    .map((item) => item.price * item.quantity)
    .reduce((prev, curr) => prev + curr, 0);

  const totalCostInLocalCurrency = new Intl.NumberFormat(country, {
    style: "currency",
    currency: currency,
  }).format(totalCost);

  return totalCostInLocalCurrency;
};
