"use client";
import { useState, useEffect, useRef } from "react";
import { useSpreadsheet } from "../context/SpreadSheetContext";
import styles from "../styles/cells.module.css";

const Cell = ({ id }) => {
  const {
    cellValues,
    updateCellValue,
    showSelectionState,
    addCellSelection,
    isCellSelected,
    setDragState,
    dragState,
  } = useSpreadsheet();
  const [isEditing, setIsEditing] = useState(false);
  const [background, setBackground] = useState("white");
  const cellRef = useRef(null);

  const value = cellValues[id] || "";
  const handleBlur = () => setIsEditing(false);
  const handleChange = (e) => updateCellValue(id, e.target.value);

  useEffect(() => {
    setBackground(isCellSelected(id) ? "#E6EFFD" : "white");
  }, [isCellSelected(id)]);

  const isOnBoundary = (e) => {
    if (!cellRef.current) return false;

    const rect = cellRef.current.getBoundingClientRect();
    const margin = 5; // Define boundary margin

    return (
      e.clientX <= rect.left + margin ||
      e.clientX >= rect.right - margin ||
      e.clientY <= rect.top + margin ||
      e.clientY >= rect.bottom - margin
    );
  };

  return (
    <div
      ref={cellRef}
      className={styles.cell}
      style={{
        height: "40px",
        border: "1px solid #F5F5F5",
        backgroundColor: background,
        padding: "4px",
      }}
      onMouseMove={(e) => {
        if (showSelectionState()) {
          setBackground("#E6EFFD");
          addCellSelection(id);
        }
      }}
      onDoubleClick={() => setIsEditing(true)}
      onMouseDown={(e) => {
        if (isOnBoundary(e)) {
          setDragState(id);
        } else {
          console.log(`Clicked inside cell: ${id}`);
        }
      }}
      onMouseUp={() => {
        const dragStartValue = cellValues[dragState];
        updateCellValue(id, dragStartValue);
        updateCellValue(dragState, "");
        setDragState(null);
      }}
      onMouseEnter={() => {
        if (dragState) {
          console.log(dragState);
          console.log(cellValues[dragState]);
        }
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
