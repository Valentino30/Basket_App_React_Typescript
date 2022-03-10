import { useState } from "react";

import {
  currency,
  initialItems,
  costInLocalCurrency,
  totalCostInLocalCurrency,
} from "./utils";

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
      `Total cost: ${totalCostInLocalCurrency(
        items,
        currency
      )}. Press okay to select your method of payment.`
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
            <span>{costInLocalCurrency(price * quantity, currency)}</span>
            <button onClick={(_) => handleRemoveClick(_, id)}>x</button>
          </li>
        ))}
      </ul>
      {items.length !== 0 ? (
        <>
          <p>{totalCostInLocalCurrency(items, currency)}</p>
          <button onClick={handleClearClick}>Clear</button>
          <button onClick={handleCheckoutClick}>Check out</button>
        </>
      ) : (
        <p>Your basket is empty</p>
      )}
    </div>
  );
}

export default App;
