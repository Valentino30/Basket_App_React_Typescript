import Card from "../../shared/Card";
import List from "../../shared/List";
import Span from "../../shared/Span";
import Text from "../../shared/Text";
import Input from "../../shared/Input";
import Button from "../../shared/Button";
import ListItem from "../../shared/ListItem";

import {
  currency,
  costInLocalCurrency,
  totalCostInLocalCurrency,
} from "../../utils";

import { Item } from "../../types/item";
import { useItems } from "../../hooks/item";

type CheckoutCardProps = {
  items: Item[];
};

export default function CheckoutCard({ items }: CheckoutCardProps) {
  const { removeItem, changeItemQuantity, clearItemsQuantity } = useItems();

  const handleChange = (itemId: string, newQuantity: string) => {
    changeItemQuantity(itemId, Number(newQuantity));
  };

  const handleRemoveClick = (
    _: React.MouseEvent<HTMLButtonElement>,
    itemId: string
  ) => {
    removeItem(itemId);
  };

  const handleClearClick = () => {
    clearItemsQuantity();
  };

  const handleCheckoutClick = () => {
    alert(
      `Total cost: ${totalCostInLocalCurrency(
        items,
        currency
      )}. Press okay to select your method of payment.`
    );
  };

  return (
    <Card>
      <List>
        {items.map(({ id, title, price, quantity }) => (
          <ListItem key={id}>
            <Span>{title}</Span>
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
