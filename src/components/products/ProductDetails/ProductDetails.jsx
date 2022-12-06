import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";

const ProductDetails = () => {
  const { id } = useParams();
  const { getProductDetails, productDetails } = useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  return (
    <>
      {productDetails ? (
        <div>
          <div className="detalization">
            <img src={productDetails.image} alt="" width="250" height="250" />
            <h3>{productDetails.title}</h3>
            <h3>{productDetails.price}</h3>
            <h3>{productDetails.quantity}</h3>
            <h3>{productDetails.in_stock}</h3>
            <h3>{productDetails.views_count}</h3>
            <h3>{productDetails.color}</h3>
            <h3>{productDetails.ram}</h3>
            <h3>{productDetails.sim}</h3>
            <h3>{productDetails.parametr}</h3>
          </div>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default ProductDetails;
