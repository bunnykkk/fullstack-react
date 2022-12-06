import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import { useCart } from "../../../contexts/CartContextProvider";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Fab } from "@mui/material";
import "../../../styles/CardStyle.css";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const { deleteProduct } = useProducts();
  const { addProductToCart, checkProductInCart } = useCart();

  return (
    <div className="productCard_main-block">
      <div className="productCard_block">
        <h3 className="productCard_name">{item.title}</h3>
        <img className="productCard_img" src={item.image} alt="" />
        <h3 className="productCard_price">{item.price}</h3>
        <h3 className="productCard_price">{item.in_stock}som</h3>

        <div className="productCard_buttons">
          <button
            className="btnDet"
            onClick={() => navigate(`/details/${item.slug}`)}
            variant="contained"
            size="small">
            Details
          </button>
          <Fab
            className=""
            size="small"
            onClick={() => navigate(`/edit/${item.id}`)}
            variant="outlined"
            aria-label="edit">
            <EditIcon />
          </Fab>
          <Fab
            className=""
            size="small"
            onClick={() => navigate(`/edit/${item.id}`)}
            variant="outlined"
            aria-label="">
            <AddShoppingCartOutlinedIcon
              style={{ color: "black" }}
              color={checkProductInCart(item.id) ? "primary" : ""}
            />
          </Fab>{" "}
          <Fab
            className=""
            size="small"
            onClick={() => navigate(`/edit/${item.id}`)}
            variant="outlined"
            aria-label="delete">
            <DeleteIcon />
          </Fab>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
