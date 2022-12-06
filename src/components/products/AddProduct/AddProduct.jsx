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
    title: "",
    description: "",
    price: "",
    quantity: "",
    color: "",
    ram: "",
    sim: "",
    parametr: "",
    picture: "",
    type: "",
  });

  const handleInp = e => {
    if (e.target.title === "price") {
      let obj = {
        ...product,
        price: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.title]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <>
      <div className="adminBlock">
        <h2 style={{ color: "white" }}>Add Product</h2>
        <input
          type="text"
          placeholder="Title"
          name="title"
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
          type="number"
          placeholder="Quantity"
          name="quantity"
          className="adminInput"
          onChange={handleInp}
        />
        <br />
        <input
          type="text"
          placeholder="Color"
          name="color"
          className="adminInput"
          onChange={handleInp}
        />
        <br />
        <input
          type="text"
          placeholder="Ram"
          name="ram"
          className="adminInput"
          onChange={handleInp}
        />
        <br />
        <input
          type="text"
          placeholder="Sim"
          name="sim"
          className="adminInput"
          onChange={handleInp}
        />
        <br />
        <input
          type="text"
          placeholder="Parametr"
          name="parametr"
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
