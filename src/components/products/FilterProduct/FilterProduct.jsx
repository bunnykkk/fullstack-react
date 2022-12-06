import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useProducts } from "../../../contexts/ProductContextProvider";
import "../../../styles/Filter.css";

export default function ControlledRadioButtonsGroup() {
  const { fetchByParams } = useProducts();

  return (
    <>
      <div className="sideFilterBLock">
        <FormControl>
          <h2>Categories</h2>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            defaultValue="all"
            onChange={(e) => fetchByParams("type", e.target.value)}>
            <ul className="ulOfCat">
              <li
                className="ilOfCat"
                onClick={(e) => fetchByParams("type", "all")}>
                <h3>All</h3>
              </li>
              <li
                className="ilOfCat"
                onClick={(e) => fetchByParams("type", "iphone")}>
                <h3>Iphone</h3>
              </li>
              <li
                className="ilOfCat"
                onClick={(e) => fetchByParams("type", "samsung")}>
                <h3>Samsung</h3>
              </li>
              <li
                className="ilOfCat"
                onClick={(e) => fetchByParams("type", "xiaomi")}>
                <h3>Xiaomi</h3>
              </li>
            </ul>
          </RadioGroup>
        </FormControl>
      </div>
    </>
  );
}
