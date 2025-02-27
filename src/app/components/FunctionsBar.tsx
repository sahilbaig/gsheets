"use client";
import React, { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import FunctionsIcon from "@mui/icons-material/Functions";
import useOperations from "../utils/functions";
const FunctionsBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const { sum, count, min, max } = useOperations();

  const handleClose = (operation: string) => {
    switch (operation) {
      case "sum":
        console.log(sum);
        break;
      case "max":
        console.log(max);
        break;
      case "min":
        console.log(min);
        break;
      case "count":
        console.log(count);
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
