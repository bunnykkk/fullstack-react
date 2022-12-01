import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// custom
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useCart } from "../../contexts/CartContextProvider";
import { useState, useEffect } from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "../../styles/Navbar.css";
import "../../styles/Search.css";
import { useProducts } from "../../contexts/ProductContextProvider";

const pages = [
  {
    type: "Admin",
    path: "/admin",
  },
  {
    type: "Products",
    path: "/products",
  },
];
const settings = [
  {
    type: "Register",
    path: "/register",
  },
  {
    type: "Login",
    path: "/login",
  },
];

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

function ResponsiveAppBar() {
  const { searchInp, setSearchInp } = useProducts();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //   custom
  const navigate = useNavigate();
  const { logout, user, checkAuth } = useAuth();
  const { cartLength } = useCart();

  // async function render() {
  //   let { data } = await axios(`${API}/${window.location.search}`);
  //   setProducts([...data]);
  // }

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);
  const iiiip = useEffect(() => {
    // render();
  }, [searchParams]);

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar id="navbar" position="static" style={{ background: "none" }}>
        <Container maxWidth="xl" className="navbar_1">
          <Toolbar disableGutters>
            <img
              className="logo"
              sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}
              class="logo"
              src="https://cdn-icons-png.flaticon.com/512/6065/6065574.png"
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}>
              APARAT™
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}>
                {pages.map(page => (
                  <MenuItem key={page.type} onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      onClick={() => navigate(page.path)}>
                      {page.type}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}>
              APARAT™
            </Typography>
            <Box
              className="nav-icons"
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map(page => (
                <Button
                  key={page.type}
                  onClick={() => navigate(page.path)}
                  sx={{ my: 2, color: "white", display: "block" }}>
                  {page.type}
                </Button>
              ))}
              <IconButton
                size="large"
                color="inherit"
                onClick={() => navigate("/cart")}>
                <Badge badgeContent={cartLength} color="error">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                color="inherit"
                onClick={() => navigate("/favorite")}>
                <Badge badgeContent={cartLength} color="error">
                  <BookmarkBorderIcon />
                </Badge>
              </IconButton>
            </Box>
            <div style={{ marginLeft: "auto", display: "flex" }}>
              {searchInp ? (
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search..."
                />
              ) : null}
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Account">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user[0]} src="..." />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}>
                  {settings.map(setting => (
                    <MenuItem key={setting.type} onClick={handleCloseUserMenu}>
                      <Typography
                        textAlign="center"
                        onClick={() => navigate(setting.path)}>
                        {setting.type}
                      </Typography>
                    </MenuItem>
                  ))}
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" onClick={logout}>
                      Logout
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
