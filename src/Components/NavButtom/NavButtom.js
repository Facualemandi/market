import React from "react";
import styled from "styled-components";
import { FcLike } from "react-icons/fc";
import { NavLink } from "react-router-dom";

const SectionOne = styled.section`
  background-color: white;
  height: auto;
  position: fixed;
  bottom: 0px;
  width: 100vw;
  padding: 10px;
`;
const BtnLike = styled(FcLike)`
  width: 50px;
  height: 50px;
  padding: 5px;
  border-radius: 100%;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.418);
`;

const Sections = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
`;

const NavL = styled(NavLink)`
  text-decoration: none;
  color: black;
`;
const NavButtom = () => {
  return (
    <>
      <SectionOne>
        <NavL to={"/Like"}>
          <Sections>
            <BtnLike />
            <p>Like</p>
          </Sections>
        </NavL>
      </SectionOne>
    </>
  );
};

export default NavButtom;
