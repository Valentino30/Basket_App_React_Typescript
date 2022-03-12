import Card from "../../shared/Card";
import Text from "../../shared/Text";
import Table from "../../shared/Table";
import Input from "../../shared/Input";
import Button from "../../shared/Button";
import Wrapper from "../../shared/Wrapper";
import TableRow from "../../shared/TableRow";
import TableData from "../../shared/TableData";
import ButtonGroup from "../../shared/ButtonGroup";
import IconButton from "../../shared/IconButton";

import {
  currency,
  costInLocalCurrency,
  totalCostInLocalCurrency,
} from "../../utils";

import { Item } from "../../types/item";
import { useItems } from "../../hooks/item";
import { toast } from "react-toastify";

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
    toast.success("Checkout Completed!");
  };

  return (
    <Card>
      {items.length !== 0 ? (
        <>
          <Table>
            {items.map(({ id, title, price, quantity }) => (
              <TableRow key={id}>
                <TableData>
                  <Text ellipsis marginRight="10px">{title}</Text>
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
                  <Text ellipsis color="#E38A5A" bold marginLeft="10px">
                    {costInLocalCurrency(price * quantity, currency)}
                  </Text>
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
            <Text ellipsis bold>{totalCostInLocalCurrency(items, currency)}</Text>
            <ButtonGroup>
              <Button onClick={handleClearClick}>Clear</Button>
              <Button
                onClick={handleCheckoutClick}
              >{`${"Check Out >"}`}</Button>
            </ButtonGroup>
          </Wrapper>
        </>
      ) : (
        <Text textAlign="center">Your basket is empty.</Text>
      )}
    </Card>
  );
}
