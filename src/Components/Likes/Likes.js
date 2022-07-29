import React from "react";
import styled from "styled-components";
import NavButtom from "../../Components/NavButtom/NavButtom";
import { FcDislike } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import { useTheContext } from "../../Context/context";

const Img = styled.img`
  width: 150px;
  height: 100px;
`;

const Main = styled.main`
  display: grid;
  width: 95vw;
  margin: auto;
  grid-template-columns: repeat(2, 1fr);
`;

const Favorite = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin: 10px;
  display: flex;
  margin: auto;
  width: max-content;
  background-color: #ece9e6;
  width: 100vw;
  justify-content: center;
  padding: 15px;
`;

const SectionProducts = styled.section`
  margin: 10px;
  padding: 10px;
  background: #ece9e6;
  background: -webkit-linear-gradient(to top, #ffffff, #ece9e6);
  background: linear-gradient(to top, #ffffff, #ece9e6);
  box-shadow: 0px 0px 10px 0px rgba(5, 5, 5, 0.267);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SectionNamePrice = styled.section`
  width: 100%;
`;
const Name = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  margin-top: 10px;
`;
const Price = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  margin-top: 10px;
  color: green;
`;

const DisLike = styled(FcDislike)`
  width: 45px;
  height: 45px;
  padding: 5px;
  border-radius: 100%;
  background-color: white;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.418);
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Likes = () => {
  const { likes, data, setData } = useTheContext();

  const getLocalLikes = localStorage.getItem("Likes");
  const parseLocalLikes = JSON.parse(getLocalLikes);

  const deleteLike = (el) => {
    const productsLocal = localStorage.getItem("Products");
    const parseLocalProducts = JSON.parse(productsLocal);
    const getIndex = parseLocalProducts.findIndex(
      (element) => element.id === el.id
    );
    parseLocalProducts[getIndex].like = false;
    localStorage.setItem("Products", JSON.stringify(parseLocalProducts));
    setData(parseLocalLikes);
  };

  return (
    <>
      <Favorite>Productos agregado a favoritos </Favorite>

      {parseLocalLikes.length === 0 && <p>No hay Elementos en favoritos</p>}

      <Main>
        {parseLocalLikes.map((el) => (
          <SectionProducts>
            <Img alt={el.name} src={el.img} />
            <SectionNamePrice>
              <Name>{el.name}</Name>
              <Price>${el.price}</Price>
            </SectionNamePrice>
            <DisLike onClick={() => deleteLike(el)} />
          </SectionProducts>
        ))}
      </Main>
      <NavButtom />
    </>
  );
};

export default Likes;
