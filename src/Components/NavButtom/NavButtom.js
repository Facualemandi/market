import React from "react";
import styled from "styled-components";
import { FcLike } from "react-icons/fc";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useTheContext } from "../../Context/context";

const SectionOne = styled.section`
  background-color: white;
  height: auto;
  position: fixed;
  bottom: 0px;
  width: 100vw;
  padding: 5px;
`;
const BtnShop = styled(AiOutlineHome)`
  width: 50px;
  height: 50px;
  padding: 5px;
  border-radius: 100%;
`;
const BtnLike = styled(FcLike)`
  width: 50px;
  height: 50px;
  padding: 5px;
  border-radius: 100%;
`;
const BtnHome = styled(AiOutlineShoppingCart)`
  width: 50px;
  height: 50px;
  padding: 5px;
  border-radius: 100%;
`;

const Sections = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  position: relative;
`;

const NavL = styled(NavLink)`
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: space-around;
`;

const AmountLikes = styled.p`
  position: absolute;
  top: 0px;
  right: 0px;
`;
const NavButtom = () => {
  const { likes } = useTheContext();

  return (
    <>
      <SectionOne>
        <NavL to={"/Like"}>
          <Sections>
            <BtnLike />
            <p>Like</p>
            <AmountLikes>{likes.length}</AmountLikes>
          </Sections>
          <Sections>
            <BtnShop />
            <p>Shop</p>
          </Sections>
          <Sections>
            <BtnHome />
            <p>Home</p>
          </Sections>
        </NavL>
      </SectionOne>
    </>
  );
};

export default NavButtom;
