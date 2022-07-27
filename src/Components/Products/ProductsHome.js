import React from "react";
import styled from "styled-components";
import { FcLikePlaceholder } from "react-icons/fc";

const SectionOne = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  background: #ece9e6;
  background: -webkit-linear-gradient(to top, #ffffff, #ece9e6);
  background: linear-gradient(to top, #ffffff, #ece9e6);
  box-shadow: 0px 0px 10px 0px rgba(5, 5, 5, 0.267);
  position: relative;
`;

const Img = styled.img`
  width: 70%;
  height: 130px;
`;

const SectionTwo = styled.section`
  width: 100%;
  padding: 5px;
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

const NoLike = styled(FcLikePlaceholder)`
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

const ProductsHome = ({ name, img, price }) => {
  return (
    <>
      <SectionOne>
        <Img alt={name} src={img} />
        <SectionTwo>
          <Name>{name}</Name>
          <Price>${price}</Price>
        </SectionTwo>
        <NoLike />
      </SectionOne>
    </>
  );
};

export default ProductsHome;
