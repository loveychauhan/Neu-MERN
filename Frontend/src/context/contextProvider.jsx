import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
// import { products } from "../assets/assets";

export const ShopContext = createContext();

function ShopContextProvider({ children }) {
  const [cartItem, setCartItem] = useState({});
  const [productData, setProductData] = useState([]);
  const [collectionProducts, setCollectionProducts] = useState(null);
  const [totalCost, setTotalCost] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [searchbtnClick, setSearchbtnClick] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const [user, setUser] = useState("");

  const addToCart = async (id, size) => {
    if (!size) return alert("Select a size");
    const authToken = localStorage.getItem("token");

    if (!authToken) return alert("log in first");

    const cartData = structuredClone(cartItem);

    const userCart = { id: id, size: size };

    const response = await axios.post(
      "http://localhost:8000/cartItem",
      userCart,
      {
        headers: { Authorization: authToken },
      }
    );

    cartData[id] = cartData[id] || {};
    cartData[id][size] = (cartData[id][size] || 0) + 1;

    setCartItem(cartData);
  };

  const updateQuantity = async (e, id, size, quantity) => {
    const authToken = localStorage.getItem("token");
    if (!authToken) return alert("log in first");
    const cartData = structuredClone(cartItem);
    const action = e.target.dataset.action;

    if (quantity === 0) {
      cartData[id][size] = 0;
    } else if (action === "decrease" && cartData[id][size] > 1) {
      cartData[id][size] -= 1;
    } else if (action === "increase") {
      cartData[id][size] += 1;
    }

    setCartItem(cartData);

    const response = await axios.post(
      "http://localhost:8000/updateCartItem",
      {
        id,
        quantity: cartData[id][size],
        size,
      },
      {
        headers: { Authorization: authToken },
      }
    );
  };

  const getCartItem = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      setUser(decoded);
    }
    try {
      const response = await axios.post(
        "http://localhost:8000/getCartItem",
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setCartItem(response.data.cartData);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:8000");
      const fetchedData = response.data.productData;
      setCollectionProducts(fetchedData);
    } catch (error) {
      console.error("Error fetching products:", error);
      setCollectionProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    getCartItem();
  }, [isAuthenticated]);

  useEffect(() => {
    if (!collectionProducts) return;

    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      fetchData();
      return;
    }

    const filtered = collectionProducts.filter((prod) => {
      return (
        prod.name.toLowerCase().includes(query) ||
        prod.subCategory.toLowerCase().includes(query)
      );
    });

    setCollectionProducts(filtered);
  }, [searchQuery]);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (token) {
      setUser(jwtDecode(token));
    }
  }, [token, isAuthenticated]);

  useEffect(() => {
    if (!collectionProducts) return;

    const tempData = [];
    let total = 0;
    let totalItems = 0;

    for (const id in cartItem) {
      for (const size in cartItem[id]) {
        const quantity = cartItem[id][size];
        if (quantity > 0) {
          const product = collectionProducts.find((p) => p._id === id);
          if (product) {
            tempData.push({ ...product, size, quantity });
            total += quantity * product.price;
            totalItems += quantity;
          }
        }
      }
    }

    setProductData(tempData);
    setTotalCost(total);
    setCartQuantity(totalItems);
  }, [cartItem, collectionProducts]);

  const contextValue = {
    addToCart,
    updateQuantity,
    productData,
    cartQuantity,
    totalCost,
    setSearchbtnClick,
    searchbtnClick,
    setSearchQuery,
    searchQuery,
    collectionProducts,
    isLoading,
    isAuthenticated,
    setIsAuthenticated,
    user,
    setCartItem,
    cartItem,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}

export default ShopContextProvider;
