import React, { useState } from "react";
import ProductsList from "../components/products/ProductsList/ProductsList";
import ProductSideBar from "../components/products/ProductSideBar/ProductSideBar";
import "../styles/ProductsPage.css";
import Footer from "../components/Footer/Footer";

const ProductsPage = () => {
  const [page, setPage] = useState(1);
  const [isSideBar, setIsSideBar] = useState(true);

  function changeSideBarStatus() {
    setIsSideBar(!isSideBar);
  }

  return (
    <div className="productsPage">
      <ProductSideBar isSideBar={isSideBar} setPage={setPage} />
      <ProductsList
        page={page}
        setPage={setPage}
        changeSideBarStatus={changeSideBarStatus}
      />
      <Footer />
    </div>
  );
};

export default ProductsPage;
