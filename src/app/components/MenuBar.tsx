// @ts-nocheck

"use client";
import { Grid, Tooltip } from "@mui/material";
import { useState } from "react";

const MenuBar = () => {
  const menuItems = ["File", "Edit", "View", "Insert", "Format"];
  const [hovered, setHovered] = useState(null);

  return (
    <Grid container spacing={1}>
      {menuItems.map((item, index) => (
        <Grid
          item
          key={item}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          sx={{
            padding: "8px",
            cursor: "pointer",
            backgroundColor: hovered === index ? "#E8EBEE" : "transparent",
            transition: "background-color 0.3s",
            borderRadius: "4px",
          }}
        >
          <Tooltip title={`${item} Coming soon`} arrow>
            <span>{item}</span>
          </Tooltip>
        </Grid>
      ))}
    </Grid>
  );
};

export default MenuBar;
