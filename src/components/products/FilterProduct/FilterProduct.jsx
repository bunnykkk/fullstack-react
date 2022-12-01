import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useProducts } from "../../../contexts/ProductContextProvider";

export default function ControlledRadioButtonsGroup() {
  const { fetchByParams } = useProducts();

  return (
    <FormControl>
      <h2>Categories</h2>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        defaultValue="all"
        onChange={e => fetchByParams("type", e.target.value)}>
        <FormControlLabel value="all" control={<Radio />} label="All" />
        <FormControlLabel value="iphone" control={<Radio />} label="iPhone" />
        <FormControlLabel value="samsung" control={<Radio />} label="Samsung" />
        <FormControlLabel value="huawei" control={<Radio />} label="Huawei" />
      </RadioGroup>
    </FormControl>
  );
}
