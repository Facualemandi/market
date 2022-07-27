import React from "react";
import { useProducts } from "../../Hooks/useProducts";
import ProductsHome from "./ProductsHome";

const Products = () => {
  const { products } = useProducts();

  return (
    <>
      {products.map((el) => (
        <ProductsHome key={el.key} name={el.name} />
      ))}
    </>
  );
};

export default Products;
