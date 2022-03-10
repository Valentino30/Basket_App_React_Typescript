import { useEffect } from "react";

import Header from "./shared/Header";
import Wrapper from "./shared/Wrapper";

import { useItems } from "./hooks/item";
import CheckoutCard from "./Components/CheckoutCard";

function App() {
  const { getItems, isGettingItems, items } = useItems();

  useEffect(() => {
    getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isGettingItems) return <Header>Loading...</Header>;
  return (
    <Wrapper>
      <Header>My Basket App</Header>
      <CheckoutCard items={items} />
    </Wrapper>
  );
}

export default App;
