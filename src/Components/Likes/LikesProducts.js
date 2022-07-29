import React from "react";
import styled from "styled-components";
import { FcDislike } from "react-icons/fc";

const Img = styled.img`
  width: 150px;
  height: 100px;
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
const LikesProducts = ({ name, price, deleteLike, img, el }) => {
  return (
    <>
      <SectionProducts>
        <Img alt={name} src={img} />
        <SectionNamePrice>
          <Name>{name}</Name>
          <Price>${price}</Price>
        </SectionNamePrice>
        <DisLike onClick={() => deleteLike(el)} />
      </SectionProducts>
    </>
  );
};

export default LikesProducts;
