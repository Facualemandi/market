import React, { useState } from "react";
import styled from "styled-components";
import LogoA from "../../Images/LogoA.png";
import Hamburger from "hamburger-react";

const Section = styled.section`
  width: 100vw;
  height: auto;
  background-color: #ffedd5;
  position: relative;
`;

const SectionDesktop = styled.section`
  @media (min-width: 780px) {
    width: 780px;
    display: flex;
    justify-content: space-between;
    margin: auto;
    position: relative;
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
`;

const Img = styled.img`
  width: 70vw;
  height: 130px;
  display: flex;
  margin: auto;

  @media (min-width: 650px) {
    width: 50vw;
  }
  @media (min-width: 780px) {
    margin: 0;
    width: 300px;
    height: 130px;
    padding: 15px;
  }
`;

const P = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 70vw;
  color: grey;
  padding-bottom: 10px;

  @media (min-width: 780px) {
    display: none;
  }
`;

const SectionBurger = styled.section`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 1000;
  @media (min-width: 780px) {
    display: none;
  }
`;

const SectionUl = styled.section`
  z-index: 900;
  position: fixed;
  transition: 1s;
  width: 50vw;
  height: 70vh;
  top: 0px;
  right: 0px;
  transform: ${({ value }) => (value ? "translateX(-0%)" : "translateX(100%)")};
  background-color: #ffe4c0;
  border-bottom-left-radius: 250px;

  @media (min-width: 780px) {
    position: absolute;
    transform: none;
    height: 130px;
    background-color: #ffedd5;
    border-radius: 0px;
    transition: 0ms;
    display: flex;
    justify-content: space-evenly;
    width: 400px;
    margin-right: 10px;
  }

  @media (min-width: 1080px) {
    width: 550px;
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  transform: none;

  @media (min-width: 780px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

const Li = styled.li`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  margin: 10px;
  margin-top: 30px;
  max-height: 18px;
  @media (min-width: 780px) {
    cursor: pointer;
    &&:hover {
      border-bottom: 1px solid black;
    }
  }
`;

const Logo = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Section>
        <SectionDesktop>
          <Img alt="Alfareria" src={LogoA} />
          <P>Encontra todos los productos de alfarería</P>

          <SectionUl value={isOpen}>
            <Ul>
              <Li>Home</Li>
              <Li>Contacto</Li>
              <Li>Sobre nosotros</Li>
            </Ul>
          </SectionUl>
        </SectionDesktop>

        <SectionBurger>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </SectionBurger>
      </Section>
    </>
  );
};

export default Logo;
