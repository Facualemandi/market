import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export const useProducts = () => {
  const productsCollection = collection(db, "Products");
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);

  const getProducts = async () => {
    setLoader(true);
    const data = await getDocs(productsCollection);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoader(false);
  };

  useEffect(() => {
    getProducts();
  }, []);



  return {
    products,
    loader,
  };
};
