import { createContext, useContext, useState } from "react";

import { getItemsRequest } from "../api/item";
import { Item, ItemsContextType } from "../types/item";

const ItemsContext = createContext({} as ItemsContextType);

export const useItems = () => {
  return useContext(ItemsContext);
};

export const ItemsProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [isGettingItems, setIsGettingItems] = useState(false);

  const getItems = async () => {
    setIsGettingItems(true);
    try {
      const items = await getItemsRequest();
      setItems(items);
      setIsGettingItems(false);
    } catch (error) {
      setItems([]);
      setIsGettingItems(false);
    }
  };

  const changeItemQuantity = (itemId: string, value: number) => {
    if (isNaN(Number(value))) {
      return alert("Please insert a valid number");
    }
    setItems((items) => {
      return items.map((item) =>
        item.id === itemId ? { ...item, quantity: Number(value) } : item
      );
    });
  };

  const removeItem = (itemId: string) => {
    setItems((items) => {
      return items.filter((item) => item.id !== itemId);
    });
  };

  const clearItemsQuantity = () => {
    setItems((items) => {
      return items.map((item) => ({ ...item, quantity: 0 }));
    });
  };

  return (
    <ItemsContext.Provider
      value={{
        items,
        getItems,
        removeItem,
        isGettingItems,
        changeItemQuantity,
        clearItemsQuantity,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
