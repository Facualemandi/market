import React from "react";
import styled from "styled-components";
import LogoA from "../../Images/LogoA.png";

const Section = styled.section`
  width: 100vw;
  height: auto;
  background-color: #ffedd5;
`;

const SectionDesktop = styled.section`
  @media (min-width: 780px) {
    width: 780px;
    display: flex;
    margin: auto;
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

const Logo = () => {
  return (
    <>
      <Section>
        <SectionDesktop>
          <Img alt="Alfareria" src={LogoA} />
          <P>Encontra todos los productos de alfarería</P>
        </SectionDesktop>
      </Section>
    </>
  );
};

export default Logo;
