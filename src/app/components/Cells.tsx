"use client";
import { useState } from "react";
import { useSpreadsheet } from "../context/SpreadSheetContext";
import styles from "../styles/cells.module.css";

const Cell = ({ id }) => {
  const { cellValues, updateCellValue, showSelectionState } = useSpreadsheet();
  const [isEditing, setIsEditing] = useState(false);
  const [background, setBackground] = useState("white");

  const value = cellValues[id] || "";

  const handleBlur = () => setIsEditing(false);
  const handleChange = (e) => updateCellValue(id, e.target.value);

  return (
    <div
      className={styles.cell}
      style={{
        height: "40px",
        border: "1px solid #F5F5F5",
        backgroundColor: background,
        padding: "4px",
      }}
      onMouseMove={() => {
        if (showSelectionState()) {
          setBackground("#E6EFFD");
        }
      }}
      onDoubleClick={() => {
        setIsEditing(true);
      }}
    >
      {isEditing ? (
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
          style={{
            width: "100%",
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
          }}
        />
      ) : (
        <div>{value}</div>
      )}
    </div>
  );
};

export default Cell;
