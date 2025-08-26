import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

function ShopContextProvider({ children }) {
  const name = "Lovey";
  const [cartItem, setCardItem] = useState({});
  const addToCart = (id, size) => {


    if (!size) {
      return alert("select a size");
    }
    let cartData = structuredClone(cartItem);

    if (cartData[id]) {
      if (cartData[id][size]) {
        console.log("else with id same size");
        cartData[id][size] += 1;
      } else {
        console.log("else with id different size");
        cartData[id][size] = 1;
      }
    } else {
      console.log("else without id");
      cartData[id] = {};
      cartData[id][size] = 1;
    }
    setCardItem(cartData);
  };

  const obj = {
    name,
    products,
    addToCart,
    cartItem,
  };
  return <ShopContext.Provider value={obj}>{children}</ShopContext.Provider>;
}

export default ShopContextProvider;
