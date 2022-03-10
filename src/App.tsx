import { useState } from "react";

import { initialItems } from "./utils";
import CheckoutCard from "./Components/CheckoutCard";

function App() {
  const [items, setItems] = useState(initialItems);

  return <CheckoutCard items={items} setItems={setItems} />;
}

export default App;
