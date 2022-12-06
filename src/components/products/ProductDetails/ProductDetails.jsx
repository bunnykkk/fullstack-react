import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import "../../../styles/ProductDetails.css";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const ProductDetails = () => {
  const { id } = useParams();
  const { getProductDetails, productDetails } = useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  return (
    <>
      {productDetails ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}>
          <div className="detalization">
            <div className="blockInfo">
              <div>
                <img src={productDetails.image} alt="" className="infoImg" />
              </div>
              <div className="detInfo1">
                <h3>{productDetails.title}</h3>
                <h3>{productDetails.quantity}</h3>
                <h3 style={{ display: "flex", alignItems: "center" }}>
                  В наличии
                  {productDetails.in_stock ? <CheckIcon /> : <CloseIcon />}
                </h3>
                <h3>{productDetails.views_count}</h3>
                <h3>{productDetails.color}</h3>
                <div className="blockColor">
                  <button className="colorSel c1"></button>
                  <button className="colorSel c2"></button>
                  <button className="colorSel c3"></button>
                  <button className="colorSel c4"></button>
                  <button className="colorSel c5"></button>
                  <button className="colorSel c6"></button>
                </div>
                <h3>{productDetails.ram}</h3>
                <h3>{productDetails.sim}</h3>
                <h3>{productDetails.price}</h3>
              </div>
            </div>
            <div className="blockParam">
              <h3 className="paramDet">{productDetails.parametr}</h3>
            </div>
          </div>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default ProductDetails;
