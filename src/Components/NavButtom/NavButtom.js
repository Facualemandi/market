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
  @media (min-width: 780px) {
    position: absolute;
    background-color: rgba(255, 255, 255, 0);
    top: 0px;
    z-index: 2000;
    height: max-content;
    width: 100vw;
    right: 0px;
  }
`;
const BtnShop = styled(AiOutlineHome)`
  width: 50px;
  height: 50px;
  padding: 5px;
  border-radius: 100%;

  @media (min-width: 780px) {
    width: 35px;
    height: 35px;
  }
`;
const BtnLike = styled(FcLike)`
  width: 50px;
  height: 50px;
  padding: 5px;
  border-radius: 100%;

  @media (min-width: 780px) {
    width: 35px;
    height: 35px;
  }
`;
const BtnHome = styled(AiOutlineShoppingCart)`
  width: 50px;
  height: 50px;
  padding: 5px;
  border-radius: 100%;

  @media (min-width: 780px) {
    width: 35px;
    height: 35px;
  }
`;

const Sections = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  position: relative;

  @media (min-width: 780px) {
    margin-right: 15px;
  }
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

const Name = styled.p`
  @media (min-width: 780px) {
    display: none;
  }
`;
const SectionDesktop = styled.section`
  display: flex;
  width: 100vw;
  justify-content: space-around;
  @media (min-width: 780px) {
    display: flex;
    width: 780px;
    justify-content: flex-end;
    align-items: flex-end;
    margin: auto;
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
`;

const NavButtom = () => {
  const { likes } = useTheContext();

  const getLength = localStorage.getItem("Likes");
  const parseLength = JSON.parse(getLength);

  if (localStorage.getItem("Likes") === null) {
    localStorage.setItem("Likes", JSON.stringify([]));
  }

  return (
    <>
      <SectionOne>
        <NavL to={"/Like"}>
          <SectionDesktop>
            <Sections>
              <BtnLike />
              <Name>Like</Name>
              <AmountLikes>{parseLength.length}</AmountLikes>
            </Sections>
            <Sections>
              <BtnShop />
              <Name>Shop</Name>
            </Sections>
            <NavL to="/">
              <Sections>
                <BtnHome />
                <Name>Home</Name>
              </Sections>
            </NavL>
          </SectionDesktop>
        </NavL>
      </SectionOne>
    </>
  );
};

export default NavButtom;
