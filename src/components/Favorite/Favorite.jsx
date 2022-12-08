import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useProducts } from "../../contexts/ProductContextProvider";

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const { searchInp, setSearchInp } = useProducts();

  useEffect(() => {
    setSearchInp(false);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Your favorive" />
        <Tab label="Most liked" />
        <Tab label="Most views" />
      </Tabs>
    </Box>
  );
}
