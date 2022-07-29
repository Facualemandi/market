import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useTheContext } from "../Context/context";

export const useDeleteLikes = () => {
  const { likes, setData } = useTheContext();
  const [productsLike, setProductsLike] = useState([]);

  const getLocalLikes = localStorage.getItem("Likes");
  const parseLocalLikes = JSON.parse(getLocalLikes);

  const deleteLike = (el) => {
    const productsLocal = localStorage.getItem("Products");
    const parseLocalProducts = JSON.parse(productsLocal);
    const getIndex = parseLocalProducts.findIndex(
      (element) => element.id === el.id
    );
    parseLocalProducts[getIndex].like = false;
    localStorage.setItem("Products", JSON.stringify(parseLocalProducts));
    setData(parseLocalLikes);

    const deleteLikes = productsLike.findIndex(
      (element) => element.id === el.id
    );

    const newObjectLikes = [...productsLike];
    newObjectLikes.splice(deleteLikes, 1);
    localStorage.setItem("Likes", JSON.stringify(newObjectLikes));
    setProductsLike([...newObjectLikes]);

    const findLikes = likes.findIndex((element) => element.id === el.id);
    likes.splice(findLikes, 1);

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "info",
      title: "Producto eliminado de favoritos",
    });
  };

  useEffect(() => {
    setProductsLike(likes);
  }, [likes]);
  


  return {
    deleteLike,
    parseLocalLikes
  };
};
