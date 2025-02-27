"use client";
import React from "react";
import Cell from "./Cells";

const SpreadSheet = ({ rows = 5, columns = 5 }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 100px)`,
      }}
    >
      {Array.from({ length: rows * columns }).map((_, index) => (
        <Cell key={index} />
      ))}
    </div>
  );
};

export default SpreadSheet;
