import React, { useEffect, useState } from "react";
import "../../../styles/ProductSideBar.css";
import FilterProduct from "../FilterProduct/FilterProduct";
import { useProducts } from "../../../contexts/ProductContextProvider";

const ProductSideBar = ({ isSideBar, setPage }) => {
  const { getProducts } = useProducts();

  useEffect(() => {
    getProducts();
    setPage(1);
  }, []);

  return isSideBar ? (
    <div className="sideBar">
      <FilterProduct />
    </div>
  ) : null;
};

export default ProductSideBar;
