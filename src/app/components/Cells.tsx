// components/Cells.js
"use client";
import { useState } from "react";
import { useSpreadsheet } from "../context/SpreadSheetContext";
import styles from "../styles/cells.module.css";

const Cell = ({ id }) => {
  const { cellValues, selectedCells, updateCellValue, toggleCellSelection } =
    useSpreadsheet();

  const [isEditing, setIsEditing] = useState(false); // Track edit mode
  const value = cellValues[id] || ""; // Get the cell's value
  const isSelected = selectedCells.includes(id); // Check if the cell is selected

  const handleClick = () => {
    toggleCellSelection(id); // Toggle selection on click
    setIsEditing(true); // Enter edit mode
  };

  const handleBlur = () => {
    setIsEditing(false); // Exit edit mode when input loses focus
  };

  const handleChange = (e) => {
    updateCellValue(id, e.target.value); // Update the cell's value
  };

  return (
    <div
      className={styles.cell}
      style={{
        height: "40px",
        border: "1px solid #F5F5F5",
        backgroundColor: isSelected ? "#b3d9ff" : "white",
        padding: "4px",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      {isEditing ? (
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus // Automatically focus the input when it appears
          style={{
            width: "100%",
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
          }}
        />
      ) : (
        <div>{value}</div> // Display the value as plain text when not editing
      )}
    </div>
  );
};

export default Cell;
