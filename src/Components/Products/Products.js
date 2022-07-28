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
  const [data, setData] = useState([]);

  const localP = localStorage.getItem("Products");
  const parseLocal = JSON.parse(localP);

  useEffect(() => {
    const getData = () => {
      console.log(localP);
      if (!localP) {
        localStorage.setItem("Products", JSON.stringify(products));
      } else if (products.length > 0 && parseLocal.length === 0) {
        localStorage.setItem("Products", JSON.stringify(products));
      }
      const getProducts = localStorage.getItem("Products");
      const parseProducts = JSON.parse(getProducts);
      setData(parseProducts);
    };
    getData();
  }, [products, localP]);

  const likeProduct = (element) => {
    const indexElement = data.findIndex((el) => el.id === element.id);
    const newObject = [...data];
    newObject[indexElement].like = true;
    saveLike(newObject);
  };

  const saveLike = (newObject) => {
    const stringLikes = JSON.stringify(newObject);
    localStorage.setItem("Products", stringLikes);
    setData(newObject);
  };

  return (
    <>
      {loader && <Loader />}
      {!loader && (
        <Main>
          {data.map((el) => (
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

// const saveLike = (newObject) => {
//   const stringLikes = JSON.stringify(newObject);
//   localStorage.setItem("Products", stringLikes);
//   setGetProduct(newObject);
// };

// const likeProduct = (element) => {
//   const indexElement = parseProducts.findIndex((el) => el.id === element.id);
//   const newObject = [...getProduct];
//   newObject[indexElement].like = true;
//   saveLike(newObject);
// };
