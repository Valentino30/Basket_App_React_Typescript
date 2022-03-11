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
import Wrapper from "../../shared/Wrapper";
import { useItems } from "../../hooks/item";
import IconButton from "../../shared/IconButton/Button";

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
      {items.length !== 0 ? (
        <>
          <List>
            {items.map(({ id, title, price, quantity }) => (
              <ListItem key={id}>
                <Span>{title}</Span>
                <Input
                  value={quantity}
                  onChange={({ target: { value } }) => handleChange(id, value)}
                />
                <Span>{costInLocalCurrency(price * quantity, currency)}</Span>
                <IconButton onClick={(_) => handleRemoveClick(_, id)}>
                  x
                </IconButton>
              </ListItem>
            ))}
          </List>
          <Wrapper>
            <Text>{totalCostInLocalCurrency(items, currency)}</Text>
            <Button onClick={handleClearClick}>Clear</Button>
            <Button onClick={handleCheckoutClick}>Check out</Button>
          </Wrapper>
        </>
      ) : (
        <Text>Your basket is empty.</Text>
      )}
    </Card>
  );
}
