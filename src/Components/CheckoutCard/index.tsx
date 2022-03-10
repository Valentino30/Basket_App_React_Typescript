import React from "react";

import Card from "../../shared/Card";
import List from "../../shared/List";
import Span from "../../shared/Span";
import Text from "../../shared/Text";
import Input from "../../shared/Input";
import Header from "../../shared/Header";
import Button from "../../shared/Button";
import ListItem from "../../shared/ListItem";

import { Item } from "../../types/item";

import {
  currency,
  costInLocalCurrency,
  totalCostInLocalCurrency,
} from "../../utils";

type CheckoutCardProps = {
  items: Item[];
  setItems: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        price: number;
        quantity: number;
        name: string;
      }[]
    >
  >;
};

export default function CheckoutCard({ items, setItems }: CheckoutCardProps) {
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
