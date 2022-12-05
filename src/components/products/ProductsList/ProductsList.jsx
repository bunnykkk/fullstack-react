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

  const itemsOnPage = 4;

  const count = Math.ceil(products.length / itemsOnPage);

  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return products.slice(begin, end);
  }

  return (
    <div style={{ color: "white" }} className="productList">
      <button className="filterBtn" onClick={changeSideBarStatus}>
        {isSideBar ? <FilterAltOffOutlinedIcon /> : <FilterAltOutlinedIcon />}
      </button>

      {products ? (
        currentData().map(item => <ProductCard key={item.id} item={item} />)
      ) : (
        <h3>Loading...</h3>
      )}
      <Pagination count={count} page={page} onChange={handlePage} />
    </div>
  );
};

export default ProductsList;
