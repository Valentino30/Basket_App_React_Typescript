import { api } from ".";
import { Item } from "../types/item";

export const getItemsRequest = async () => {
  const items = await api.get("/products?limit=5");
  const itemsWithQuantity = items.map((item: Item) => ({
    ...item,
    title: `${item.title.substring(0, 10)}...`,
    quantity: 1,
  }));
  return itemsWithQuantity;
};
