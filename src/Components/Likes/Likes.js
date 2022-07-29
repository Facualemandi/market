import React from "react";
import styled from "styled-components";
import NavButtom from "../../Components/NavButtom/NavButtom";
import LikesProducts from "./LikesProducts";
import { useDeleteLikes } from "../../Hooks/useDeleteLikes";

const Main = styled.main`
  display: grid;
  width: 95vw;
  margin: auto;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 780px) {
    grid-template-columns: repeat(3, 1fr);
    width: 780px;
  }
  @media (min-width: 1080px) {
    grid-template-columns: repeat(4, 1fr);
    width: 1080px;
  }
  @media (min-width: 1380px) {
    grid-template-columns: repeat(5, 1fr);
    width: 1380px;
  }
`;

const Favorite = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin: 10px;
  display: flex;
  margin: auto;
  width: max-content;
  background-color: #ece9e6;
  width: 100vw;
  justify-content: center;
  padding: 15px;
`;

const Likes = () => {
  const { deleteLike, parseLocalLikes } = useDeleteLikes();

  return (
    <>
      <Favorite>Productos agregado a favoritos </Favorite>

      {parseLocalLikes.length === 0 && <p>No hay Elementos en favoritos</p>}

      <Main>
        {parseLocalLikes.map((el) => (
          <LikesProducts
            key={el.id}
            name={el.name}
            price={el.price}
            img={el.img}
            deleteLike={deleteLike}
            el={el}
          />
        ))}
      </Main>
      <NavButtom />
    </>
  );
};

export default Likes;
