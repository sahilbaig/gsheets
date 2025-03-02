// @ts-nocheck
"use client";
import React, { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import FunctionsIcon from "@mui/icons-material/Functions";
import {
  useSum,
  useMax,
  useMin,
  useCount,
  useAverage,
} from "../utils/functions";
import { useSpreadsheet } from "../context/SpreadSheetContext";

const FunctionsBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { activeCell, updateCellValue } = useSpreadsheet();

  // Call hooks inside the component
  const sum = useSum();
  const max = useMax();
  const min = useMin();
  const count = useCount();
  const average = useAverage();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (operation: string) => {
    switch (operation) {
      case "sum":
        updateCellValue(activeCell, sum);
        break;
      case "max":
        updateCellValue(activeCell, max);
        break;
      case "min":
        updateCellValue(activeCell, min);
        break;
      case "count":
        updateCellValue(activeCell, count);
        break;
      case "average":
        updateCellValue(activeCell, average);
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
        {["sum", "max", "min", "count", "average"].map((op) => (
          <MenuItem key={op} onClick={() => handleClose(op)}>
            {op.toUpperCase()}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default FunctionsBar;
