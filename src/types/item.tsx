export type Item = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

export type Currency = {
  country: string;
  currency: string;
};

export type ItemsContextType = {
  items: Item[] | [];
  isGettingItems: boolean;
  getItems: () => void;
  clearItemsQuantity: () => void;
  removeItem: (itemId: string) => void;
  changeItemQuantity: (itemId: string, value: number) => void;
};
