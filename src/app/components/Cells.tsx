"use client";
import { useState, useEffect, useRef } from "react";
import { useSpreadsheet } from "../context/SpreadSheetContext";
import styles from "../styles/cells.module.css";

const Cell = ({ id }) => {
  const intialBorder = "1px solid #F5F5F5";
  const dragBorder = "3px dashed #5C98E6";

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
  const [borderStyle, setBorderStyle] = useState(intialBorder);
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
        border: borderStyle,
        backgroundColor: background,
        padding: "4px",
      }}
      onMouseMove={(e) => {
        if (showSelectionState() && !dragState) {
          setBackground("#E6EFFD");
          addCellSelection(id);
        }
      }}
      onDoubleClick={() => setIsEditing(true)}
      onMouseDown={(e) => {
        if (isOnBoundary(e)) {
          setDragState(id);
        }
      }}
      onMouseUp={() => {
        if (dragState) {
          const dragStartValue = cellValues[dragState];
          updateCellValue(dragState, "");
          updateCellValue(id, dragStartValue);

          setDragState(null);
        }
      }}
      onMouseEnter={() => {
        if (dragState) {
          setBorderStyle(dragBorder);
        }
      }}
      onMouseLeave={() => {
        setBorderStyle(intialBorder);
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
        <div style={{ userSelect: "none" }}>{value}</div>
      )}
    </div>
  );
};

export default Cell;
