import React from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
import Plato from "../../Images/Platoalfreria.png";
import Taza from "../../Images/Tazalfareria.png";
import Bowl from "../../Images/BowlAlfareria.png";

const Main = styled.main`
  display: flex;
  height: max-content;
  flex-direction: column;
  width: 90vw;
  margin: auto;
  border-radius: 5px;
  height: 65px;
  z-index: 500;

  @media (min-width: 780px) {
    width: 780px;
    display: flex;
    flex-direction: row;
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
`;
const SectionDesktop = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90vw;
  border: 1px solid rgba(184, 184, 184, 0.986);
  border-radius: 5px;
  margin-top: 15px;

  @media (min-width: 780px) {
    width: 300px;
  }
  @media (min-width: 1080px) {
    width: 500px;
  }
  @media (min-width: 1380px) {
    width: 700px;
  }
`;
const Input = styled.input`
  width: 90vw;
  height: max-content;
  display: flex;
  margin: auto;
  border-radius: 5px;
  border: none;
  padding: 15px;
`;

const IconSearch = styled(BsSearch)`
  display: flex;
  margin-right: 10px;
  width: 25px;
  height: 25px;

  @media (min-width: 780px) {
    width: 55px;
    height: 55px;
  }
`;

const SectionOne = styled.section`
  width: 90vw;
  display: flex;
  margin: auto;
  margin-top: 10px;

  @media (min-width: 780px) {
    display: flex;
    justify-content: space-evenly;
  }
`;

const Name = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 10px;
`;

const Section = styled.section`
  width: 100%;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(34, 34, 34, 0.384);

  @media (min-width: 780px) {
    width: 150px;
    padding: 5px;
    cursor: pointer;
  }
  @media (min-width: 1380px) {
    width: 200px;
    padding: 5px;
  }
`;
const Search = () => {
  return (
    <Main>
      <SectionDesktop>
        <Input type={"text"} placeholder="Ingresa el nombre del producto" />
        <IconSearch />
      </SectionDesktop>

      <SectionOne>
        <Section>
          <Name>Platos</Name>
          <Img alt="" src={Plato} />
        </Section>
        <Section>
          <Name>Tazas</Name>
          <Img alt="" src={Taza} />
        </Section>
        <Section>
          <Name>Bowls</Name>
          <Img alt="" src={Bowl} />
        </Section>
      </SectionOne>
    </Main>
  );
};

export default Search;
