import React, { createContext, useContext, useReducer, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { ACTIONS, JSON_API_PRODUCTS } from "../helpers/consts";

export const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  productDetails: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [searchInp, setSearchInp] = useState(false);
  const API = "http://204.236.250.233";
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const navigate = useNavigate();

  const location = useLocation();

  async function getProducts() {
    const res = await axios.get(`${API}/market/smarts/`);
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: res.data,
    });
  }

  async function getProductDetails(slug) {
    const res = await axios.get(`${API}/market/smarts/${slug}/`);
    dispatch({
      type: ACTIONS.GET_PRODUCT_DETAILS,
      payload: res.data,
    });
  }

  async function saveEditedProduct(slug) {
    const res = await axios.patch(`${API}/market/smarts/${slug}/`);
    getProducts();
  }

  const addProduct = async newProduct => {
    await axios.post(`${API}/market/smarts/`, newProduct);
    getProducts();
  };

  async function deleteProduct(slug) {
    const res = await axios.delete(`${API}/market/smarts/${slug}/`);
    getProducts();
  }

  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(location.search);

    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }

    const url = `${location.pathname}?${search.toString()}`;

    navigate(url);
  };

  const values = {
    products: state.products,
    productDetails: state.productDetails,

    addProduct,
    getProducts,
    deleteProduct,
    getProductDetails,
    saveEditedProduct,
    fetchByParams,
    searchInp,
    setSearchInp,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
