import React, { useState } from "react";
import ProductsList from "../components/products/ProductsList/ProductsList";
import ProductSideBar from "../components/products/ProductSideBar/ProductSideBar";
import "../styles/ProductsPage.css";

const ProductsPage = () => {
  const [page, setPage] = useState(1);
  const [isSideBar, setIsSideBar] = useState(false);

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
        isSideBar={isSideBar}
      />
    </div>
  );
};

export default ProductsPage;
