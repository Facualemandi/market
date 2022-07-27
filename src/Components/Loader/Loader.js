import React from "react";
import styled from "styled-components";
import "./Loader.css";

const Section = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const Loader = () => {
  return (
    <Section>
      <div className="lds-hourglass"></div>
    </Section>
  );
};

export default Loader;
