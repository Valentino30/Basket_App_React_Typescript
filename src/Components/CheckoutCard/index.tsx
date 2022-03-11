import Card from "../../shared/Card";
import Text from "../../shared/Text";
import Table from "../../shared/Table";
import Input from "../../shared/Input";
import Button from "../../shared/Button";
import Wrapper from "../../shared/Wrapper";
import TableRow from "../../shared/TableRow";
import TableData from "../../shared/TableData";
import IconButton from "../../shared/IconButton/Button";

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
      {items.length !== 0 ? (
        <>
          <Table>
            {items.map(({ id, title, price, quantity }) => (
              <TableRow key={id}>
                <TableData>
                  <Text>{title}</Text>
                </TableData>
                <TableData>
                  <Input
                    value={quantity}
                    onChange={({ target: { value } }) =>
                      handleChange(id, value)
                    }
                  />
                </TableData>
                <TableData>
                  <Text>{costInLocalCurrency(price * quantity, currency)}</Text>
                </TableData>
                <TableData>
                  <IconButton onClick={(_) => handleRemoveClick(_, id)}>
                    x
                  </IconButton>
                </TableData>
              </TableRow>
            ))}
          </Table>
          <Wrapper>
            <Text>{totalCostInLocalCurrency(items, currency)}</Text>
            <Button onClick={handleClearClick}>Clear</Button>
            <Button onClick={handleCheckoutClick}>{`${"Check out >"}`}</Button>
          </Wrapper>
        </>
      ) : (
        <Text>Your basket is empty.</Text>
      )}
    </Card>
  );
}
