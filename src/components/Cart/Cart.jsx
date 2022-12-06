import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// custom
import { useCart } from "../../contexts/CartContextProvider";
import { Button, TextField, Typography } from "@mui/material";
import { useProducts } from "../../contexts/ProductContextProvider";
import "../../styles/Cart.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

export default function Cart() {
  const { getCart, cart, changeProductCount, deleteProductInCart } = useCart();

  const { searchInp, setSearchInp } = useProducts();

  useEffect(() => {
    setSearchInp(false);
  }, []);

  React.useEffect(() => {
    getCart();
  }, []);

  function cartCleaner() {
    localStorage.removeItem("cart");
    getCart();
  }

  let styleText = {
    color: "white",
  };

  // modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <TableContainer className="cartBlock">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="textBlockCart">
              <TableCell style={styleText}>Picture</TableCell>
              <TableCell style={styleText} align="center">
                Name
              </TableCell>
              <TableCell style={styleText} align="center">
                Type
              </TableCell>
              <TableCell style={styleText} align="center">
                Price
              </TableCell>
              <TableCell style={styleText} align="center">
                Count
              </TableCell>
              <TableCell style={styleText} align="center">
                Sub Price
              </TableCell>
              <TableCell style={styleText} align="center">
                ---
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart?.products.map((row) => (
              <TableRow
                key={row.item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>
                  <img src={row.item.picture} alt="" width="50" />
                </TableCell>
                <TableCell align="center">{row.item.name}</TableCell>
                <TableCell align="center">{row.item.type}</TableCell>
                <TableCell align="center">{row.item.price}</TableCell>
                <TableCell align="center">
                  <TextField
                    type="number"
                    value={row.count}
                    onChange={(e) =>
                      changeProductCount(e.target.value, row.item.id)
                    }
                  />
                </TableCell>
                <TableCell align="center">{row.subPrice}</TableCell>
                <TableCell align="center">
                  <button onClick={() => deleteProductInCart(row.item.id)}>
                    Delete From Cart
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Typography
          variant="h6"
          component="div"
          style={{
            marginTop: "1vmax",
            marginBottom: "1vmax",
          }}>
          Total Price: {cart?.totalPrice}
          <Button onClick={handleOpen} className="buyButton btn1">
            BUY NOW
          </Button>
        </Typography>
      </TableContainer>
      <div style={{ backgroundColor: "white" }}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box className="modalStyle">
            <h2>Ordering</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "20rem",
              }}>
              <TextField
                id="standard-search"
                label="First name*"
                type="search"
                variant="standard"
                style={{ width: "9rem" }}
              />
              <TextField
                id="standard-search"
                label="Last name*"
                type="search"
                variant="standard"
                style={{ width: "9rem" }}
              />
            </div>
            <div>
              <TextField
                id="standard-search"
                label="Address street/home/room"
                type="search"
                variant="standard"
                style={{ width: "20rem" }}
              />{" "}
            </div>{" "}
            <div>
              <TextField
                id="standard-search"
                label="Add card number"
                type="email"
                variant="standard"
                style={{ width: "20rem" }}
              />
            </div>
            <button
              onClick={() => {
                cartCleaner();
                handleClose();
              }}
              className="buyButton">
              BUY
            </button>
          </Box>
        </Modal>
      </div>
    </>
  );
}
