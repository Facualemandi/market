import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const getContext = createContext();

export const useTheContext = () => {
  const context = useContext(getContext);

  return context;
};

export function ContextProvider({ children }) {
  const [likes, setLikes] = useState([]);

  const likeProduct = (el) => {
    el.like = true;
    const findLike = likes.find((object) => object.id === el.id);

    if (findLike) {
      return;
    } else {
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
        icon: "success",
        title: "Producto agregado a favoritos",
      });
      setLikes([...likes, el]);
      localStorage.setItem("Likes", JSON.stringify([...likes, el]));
    }
  };

  useEffect(() => {
    console.log(likes);
  }, [likes]);

  return (
    <getContext.Provider value={{ likeProduct }}>
      {children}
    </getContext.Provider>
  );
}
