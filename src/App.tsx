import { useState } from "react";

import { initialItems } from "./utils";

function App() {
  const [items, setItems] = useState(initialItems);
  const handleChange = (itemId: string, value: string) => {
    setItems((items) => {
      return items.map((item) => {
        return item.id === itemId ? { ...item, quantity: Number(value) } : item;
      });
    });
  };

  return (
    <div>
      <h1>My Basket App</h1>
      <ul>
        {items.map(({ id, name, price, currency, quantity }) => (
          <li key={id}>
            <span>{name}</span>
            <input
              value={quantity}
              onChange={({ target: { value } }) => handleChange(id, value)}
            />
            <span>{`${price * quantity} ${currency}`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
