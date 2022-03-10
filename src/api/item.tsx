import { api } from ".";
import { Item } from "../types/item";

export const getItemsRequest = async () => {
  try {
    const items = await api.get("/products");
    const itemsWithQuantity = items.map((item: Item) => ({
      ...item,
      quantity: 1,
    }));
    return itemsWithQuantity;
  } catch (error) {
    alert("Oops! Something went wrong");
  }
};
