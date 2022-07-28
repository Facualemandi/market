import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useProducts } from "../../Hooks/useProducts";
import Loader from "../Loader/Loader";
import ProductsHome from "./ProductsHome";

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 95vw;
  margin: auto;

  @media (min-width: 780px) {
    width: 780px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1080px) {
    width: 1080px;
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1380px) {
    width: 1380px;
    grid-template-columns: repeat(5, 1fr);
  }
`;
const Products = () => {
  const { products, loader } = useProducts();

  localStorage.setItem("Products", JSON.stringify(products));
  const getProducts = localStorage.getItem("Products");
  const parseProducts = JSON.parse(getProducts);

  const [getProduct, setGetProduct] = useState([]);

  useEffect(() => {
    setGetProduct(products);
  }, [products]);

  const saveLike = (newObject) => {
    const stringLikes = JSON.stringify(newObject);
    localStorage.setItem("Products", stringLikes);
    setGetProduct(newObject);
  };

  const likeProduct = (element) => {
    const indexElement = getProduct.findIndex((el) => el.id === element.id);
    const newObject = [...getProduct];
    newObject[indexElement].like = true;
    saveLike(newObject);
  };

  return (
    <>
      {loader && <Loader />}
      {!loader && (
        <Main>
          {getProduct.map((el) => (
            <ProductsHome
              key={el.key}
              name={el.name}
              price={el.price}
              img={el.img}
              el={el}
              like={el.like}
              likeProduct={likeProduct}
            />
          ))}
        </Main>
      )}
    </>
  );
};

export default Products;
