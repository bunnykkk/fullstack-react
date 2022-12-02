import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import "../../../styles/AddProduct.css";

const AddProduct = () => {
  const navigate = useNavigate();

  const { searchInp, setSearchInp } = useProducts();

  useEffect(() => {
    setSearchInp(false);
  }, []);

  const { addProduct } = useProducts();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    picture: "",
    type: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        price: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <>
      <div className="adminBlock">
        <h2>Add Product</h2>
        <input
          type="text"
          placeholder="Title"
          name="name"
          className="adminInput"
          onChange={handleInp}
        />
        <br />
        <input
          type="text"
          placeholder="Description"
          name="description"
          className="adminInput"
          onChange={handleInp}
        />
        <br />
        <input
          type="number"
          placeholder="Price"
          name="price"
          className="adminInput"
          onChange={handleInp}
        />
        <br />
        <input
          type="text"
          placeholder="Picture"
          name="picture"
          className="adminInput"
          onChange={handleInp}
        />
        <br />
        <input
          type="text"
          placeholder="Type"
          name="type"
          className="adminInput"
          onChange={handleInp}
        />
        <br />

        <button
          className="btnAdminSave"
          onClick={() => {
            addProduct(product);
            navigate("/products");
          }}>
          Save
        </button>
      </div>
    </>
  );
};

export default AddProduct;
