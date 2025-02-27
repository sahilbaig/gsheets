"use client";
import React, { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import FunctionsIcon from "@mui/icons-material/Functions";
import { useSum, useMax, useMin, useCount } from "../utils/functions";

const FunctionsBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Call hooks inside the component
  const sum = useSum();
  const max = useMax();
  const min = useMin();
  const count = useCount();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (operation) => {
    switch (operation) {
      case "sum":
        console.log("SUM result:", sum);
        break;
      case "max":
        console.log("MAX result:", max);
        break;
      case "min":
        console.log("MIN result:", min);
        break;
      case "count":
        console.log("COUNT result:", count);
        break;
      default:
        console.log("Invalid operation");
    }

    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <FunctionsIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
        {["sum", "max", "min", "count"].map((op) => (
          <MenuItem key={op} onClick={() => handleClose(op)}>
            {op.toUpperCase()}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default FunctionsBar;
