import { useState } from "react";

import { calculateTotalCost, currency, initialItems } from "./utils";

function App() {
  const [items, setItems] = useState(initialItems);

  const handleChange = (itemId: string, value: string) => {
    if (isNaN(Number(value))) {
      return alert("Please insert a valid number");
    }
    setItems((items) => {
      return items.map((item) =>
        item.id === itemId ? { ...item, quantity: Number(value) } : item
      );
    });
  };

  const handleClearClick = () => {
    setItems((items) => {
      return items.map((item) => ({ ...item, quantity: 0 }));
    });
  };

  const handleCheckoutClick = () => {
    alert(
      `Total cost: ${currency} ${calculateTotalCost(
        items
      )}. Press okay to proceed with the payment.`
    );
  };

  const handleRemoveClick = (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    itemId: string
  ) => {
    setItems((items) => {
      return items.filter((item) => item.id !== itemId);
    });
  };

  return (
    <div>
      <h1>My Basket App</h1>
      <ul>
        {items.map(({ id, name, price, quantity }) => (
          <li key={id}>
            <span>{name}</span>
            <input
              value={quantity}
              onChange={({ target: { value } }) => handleChange(id, value)}
            />
            <span>{`${currency} ${price * quantity}`}</span>
            <button onClick={(_) => handleRemoveClick(_, id)}>x</button>
          </li>
        ))}
      </ul>
      <p>{`${currency} ${calculateTotalCost(items)}`}</p>
      <button onClick={handleClearClick}>Clear</button>
      <button onClick={handleCheckoutClick}>Check out</button>
    </div>
  );
}

export default App;
