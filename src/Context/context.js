import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useProducts } from "../Hooks/useProducts";

const getContext = createContext();

export const useTheContext = () => {
  const context = useContext(getContext);

  return context;
};

export function ContextProvider({ children }) {
  const { products, loader } = useProducts();
  const [data, setData] = useState([]);
  const [likes, setLikes] = useState([]);

  const localP = localStorage.getItem("Products");
  const parseLocal = JSON.parse(localP);


  useEffect(() => {
    const getData = () => {
      if (!localP) {
        localStorage.setItem("Products", JSON.stringify(products));
      } else if (products.length > 0 && parseLocal.length === 0) {
        localStorage.setItem("Products", JSON.stringify(products));
      }
      const getProducts = localStorage.getItem("Products");
      const parseProducts = JSON.parse(getProducts);
      setData(parseProducts);
    };
    getData();
  }, [products, localP]);

  const likeProduct = (e, element) => {
    e.preventDefault();
    const indexElement = data.findIndex((el) => el.id === element.id);
    const newObject = [...data];
    newObject[indexElement].like = true;
    setLikes([...likes, element]);
    localStorage.setItem("Likes", JSON.stringify([...likes, element]));
    saveLike(newObject);
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
      title: "Producto Agregado a Favoritos",
    });
  };

  const saveLike = (newObject) => {
    const stringLikes = JSON.stringify(newObject);
    localStorage.setItem("Products", stringLikes);
    setData(newObject);
  };

  return (
    <getContext.Provider value={{ likeProduct, loader, data, setData, likes }}>
      {children}
    </getContext.Provider>
  );
}
