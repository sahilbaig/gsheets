"use client";
import React from "react";
import IconButton from "@mui/material/IconButton";
import { Description } from "@mui/icons-material";

function ClickableIcon() {
  const handleClick = () => {
    console.log("Icon clicked!");
    // Add your click handler logic here
  };

  return (
    <IconButton onClick={handleClick} aria-label="favorite" color="success">
      <Description />
    </IconButton>
  );
}

export default ClickableIcon;
