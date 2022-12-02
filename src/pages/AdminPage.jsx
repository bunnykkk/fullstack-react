import React from "react";
import AddProduct from "../components/products/AddProduct/AddProduct";

const AdminPage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "4vmax",
        }}>
        <AddProduct />
      </div>
    </>
  );
};

export default AdminPage;
