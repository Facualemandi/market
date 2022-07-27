import React from "react";
import styled from "styled-components";

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
const ProductsHome = ({ name, img, price }) => {
  return (
    <>
      <SectionOne>
        <Img alt={name} src={img} />
        <SectionTwo>
          <Name>{name}</Name>
          <Price>${price}</Price>
        </SectionTwo>
      </SectionOne>
    </>
  );
};

export default ProductsHome;
