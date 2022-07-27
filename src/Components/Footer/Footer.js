import React from "react";
import styled from "styled-components";
import { RiSendPlaneFill } from "react-icons/ri";

const FooterContainer = styled.footer`
  width: 100vw;
  height: auto;
  background-color: #ece9e6;
  @media (min-width: 780px) {
    display: flex;
  }
`;

const H3 = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #7bda92;
  padding: 10px;
`;

const P1 = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 300;
  margin: 15px;
  color: black;
`;

const SectionInput = styled.section`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  border-radius: 5px;
  background-color: white;
  margin: 15px auto;
  margin-top: 20px;
  @media (min-width: 780px) {
    width: 50vw;
  }
  @media (min-width: 1000px) {
    width: 40vw;
  }
  @media (min-width: 1400px) {
    width: 30vw;
  }
`;

const Input = styled.input`
  padding: 10px;
  width: 70vw;
  border: none;
  outline: none;
  border-radius: 5px;
  @media (min-width: 780px) {
    width: 50vw;
  }
  @media (min-width: 1000px) {
    width: 40vw;
  }
  @media (min-width: 1400px) {
    width: 30vw;
  }
`;

const IconSend = styled(RiSendPlaneFill)`
  width: 30px;
  height: 30px;
  color: grey;
`;

const SectionOne = styled.section``;
const SectionTwo = styled.section``;

const SectionThree = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
`;

const Redes = styled.p`
  margin: 10px;
  padding: 10px;
  background-color: #474750;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const FooterDesktop = styled.section`
  @media (min-width: 780px) {
    width: 90vw;
    display: flex;
    max-width: 1080px;
    margin: auto;
  }
`;
const SectionDesktop = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 780px) {
    margin-left: 15px;
  }
`;

const NavToRedes = styled.a`
  color: white;
`;
const Footer = () => {
  return (
    <FooterContainer>
      <FooterDesktop>
        <SectionOne>
          <H3>Atecion al cliente</H3>
          <P1>581310-5135-8292</P1>
          <P1>consultas@consultas@gmail.com</P1>
          <P1>
            WhatsApp +313 131 25540-23939 Lun. a Vie. de 9 a 18h. Sab de 10 a
            14h.
          </P1>

          <H3>PickUp Point</H3>

          <P1>Lun. a Vie. de 10 a 18h.</P1>
        </SectionOne>

        <SectionDesktop>
          <SectionTwo>
            <P1>Sé el primero en enterarte </P1>
            <P1>Suscribite y recibí las mejores promos! </P1>

            <SectionInput>
              <Input type={"text"} placeholder="ejemplo@gmail.com" />
              <IconSend />
            </SectionInput>
          </SectionTwo>

          <SectionThree>
            <Redes>
              <NavToRedes
                href="https://www.instagram.com/facu_alemandi/"
                target={"_blank"}
                rel="noreferrer"
              >
                {/* <FaInstagramSquare /> */}
              </NavToRedes>
            </Redes>
            <Redes>
              <NavToRedes
                href="https://twitter.com/AlemandiFacundo"
                target={"_blank"}
                rel="noreferrer"
              >
                {/* <FaTwitterSquare /> */}
              </NavToRedes>
            </Redes>
            <Redes>
              <NavToRedes
                href="https://www.linkedin.com/in/facundo-alemandi-4714a7233/"
                target={"_blank"}
                rel="noreferrer"
              >
                {/* <FaLinkedin /> */}
              </NavToRedes>
            </Redes>
            <Redes>
              <NavToRedes
                href="https://github.com/Facualemandi"
                target={"_blank"}
                rel="noreferrer"
              >
                {/* <FaGithubSquare /> */}
              </NavToRedes>
            </Redes>
            <Redes>
              <NavToRedes
                href="https://www.facebook.com/facundo.alemandi"
                target={"_blank"}
                rel="noreferrer"
              >
                {/* <FaFacebookSquare /> */}
              </NavToRedes>
            </Redes>
          </SectionThree>
        </SectionDesktop>
      </FooterDesktop>
    </FooterContainer>
  );
};

export default Footer;
