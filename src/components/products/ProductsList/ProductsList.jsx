import React, { useEffect } from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "@mui/material/Pagination";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FilterAltOffOutlinedIcon from "@mui/icons-material/FilterAltOffOutlined";
import "../../../styles/Filter.css";

const ProductsList = ({ page, setPage, changeSideBarStatus, isSideBar }) => {
  const { products, getProducts } = useProducts();
  const { searchInp, setSearchInp } = useProducts();

  useEffect(() => {
    setSearchInp(true);
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <button className="filterBtn" onClick={changeSideBarStatus}>
        {isSideBar ? <FilterAltOffOutlinedIcon /> : <FilterAltOutlinedIcon />}
      </button>
      <div style={{ color: "white" }} className="productList">
        {products ? (
          products.map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <h3>Loading...</h3>
        )}
        {/* <Pagination
    color="primary"
    className="pag"
    style={{
      display: "flex",
      justifyContent: "center",
      color: "red",
    }}
    count={count}
    page={page}
    onChange={handlePage}
  /> */}
      </div>
    </>
  );
};

export default ProductsList;
