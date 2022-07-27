import React from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  width: 90vw;
  margin: auto;
  border-radius: 5px;
  margin-top: 15px;

  @media (min-width: 780px) {
    width: 780px;
    display: flex;
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
  border: 1px solid grey;
  border-radius: 5px;
  margin-top: 15px;

  @media (min-width: 780px) {
    width: 500px;
  }
  @media (min-width: 1080px) {
    width: 600px;
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
`;
const Search = () => {
  return (
    <Main>
      <SectionDesktop>
        <Input type={"text"} placeholder="Ingresa por Nombre..." />
        <IconSearch />
      </SectionDesktop>
    </Main>
  );
};

export default Search;
