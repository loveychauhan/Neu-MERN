import React from "react";
import { useParams } from "react-router-dom";

function Product() {
  const { productId } = useParams();
  console.log(productId);
  return <div>{productId}</div>;
}

export default Product;
