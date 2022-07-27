import React from "react";
import Footer from "../../Components/Footer/Footer";
import Logo from "../../Components/Logo/Logo";
import Products from "../../Components/Products/Products";
import Search from "../../Components/Search/Search";
import { useProducts } from "../../Hooks/useProducts";

const Home = () => {
  const { loader } = useProducts();
  return (
    <>
      <Logo />
      <Search />
      <Products />
      {!loader && <Footer />}
    </>
  );
};

export default Home;
