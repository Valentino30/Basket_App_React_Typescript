import { useState } from "react";

import Text from "./shared/Text";
import Span from "./shared/Span";
import List from "./shared/List";
import Card from "./shared/Card";
import Input from "./shared/Input";
import Button from "./shared/Button";
import Header from "./shared/Header";
import ListItem from "./shared/ListItem";

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
    <Card>
      <Header>My Basket App</Header>
      <List>
        {items.map(({ id, name, price, quantity }) => (
          <ListItem key={id}>
            <Span>{name}</Span>
            <Input
              value={quantity}
              onChange={({ target: { value } }) => handleChange(id, value)}
            />
            <Span>{costInLocalCurrency(price * quantity, currency)}</Span>
            <Button onClick={(_) => handleRemoveClick(_, id)}>x</Button>
          </ListItem>
        ))}
      </List>
      {items.length !== 0 ? (
        <>
          <Text>{totalCostInLocalCurrency(items, currency)}</Text>
          <Button onClick={handleClearClick}>Clear</Button>
          <Button onClick={handleCheckoutClick}>Check out</Button>
        </>
      ) : (
        <Text>Your basket is empty.</Text>
      )}
    </Card>
  );
}

export default App;
