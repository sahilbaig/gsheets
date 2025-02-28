"use client";
import { useState, useEffect, useRef } from "react";
import { useSpreadsheet } from "../context/SpreadSheetContext";
import styles from "../styles/cells.module.css";

const Cell = ({ id, width, height }) => {
  const intialBorder = "1px solid #F5F5F5";
  const dragBorder = "3px dashed #5C98E6";
  const activeBorder = "1px solid blue";

  const {
    cellValues,
    updateCellValue,
    showSelectionState,
    addCellSelection,
    isCellSelected,
    setDragState,
    dragState,
    setActiveCell,
    isCellActive,
    cellType,
    selectedCells,
  } = useSpreadsheet();

  const [isEditing, setIsEditing] = useState(false);
  const [background, setBackground] = useState("white");
  const [borderStyle, setBorderStyle] = useState(intialBorder);
  const [currentCellType, setCurrentCellType] = useState(cellType[id] || "");
  const [dependency, setDependency] = useState([]);
  const cellRef = useRef(null);

  const value = cellValues[id] || "";
  const handleBlur = () => setIsEditing(false);
  const handleChange = (e) => {
    updateCellValue(id, e.target.value);
  };

  useEffect(() => {
    setBackground(isCellSelected(id) ? "#E6EFFD" : "white");
  }, [isCellSelected(id)]);

  useEffect(() => {
    setBorderStyle(isCellActive(id) ? activeBorder : intialBorder);
  }, [isCellActive(id)]);

  useEffect(() => {
    setCurrentCellType(cellType[id] || "");
    if (currentCellType != "text") {
      console.log("goes her?");
      setDependency(selectedCells);
    } else {
      setDependency({});
    }
    console.log(`Cell ${id} type changed to: ${cellType[id]}`);
  }, [cellType[id]]);

  useEffect(() => {
    if (!dependency || dependency.length === 0) return;

    const values = dependency.map(
      (cellId) => parseFloat(cellValues[cellId]) || 0
    );
    console.log(values);

    switch (cellType[id]) {
      case "sum":
        console.log(id, values);
        updateCellValue(
          id,
          values.reduce((acc, val) => acc + val, 0)
        );
        break;
      case "max":
        updateCellValue(id, Math.max(...values));
        break;
      case "min":
        updateCellValue(id, Math.min(...values));
        break;
      case "count":
        updateCellValue(id, values.length);
        break;
      case "avg":
        updateCellValue(
          id,
          values.length > 0
            ? values.reduce((acc, val) => acc + val, 0) / values.length
            : 0
        );
        break;
      default:
        break;
    }
  }, [
    cellType[id],
    ...dependency.map((cellId) => cellValues[cellId]),
    currentCellType,
  ]);
  const isOnBoundary = (e) => {
    if (!cellRef.current) return false;

    const rect = cellRef.current.getBoundingClientRect();
    const margin = 5;

    return (
      e.clientX <= rect.left + margin ||
      e.clientX >= rect.right - margin ||
      e.clientY <= rect.top + margin ||
      e.clientY >= rect.bottom - margin
    );
  };

  const handleClick = () => {
    setBorderStyle(activeBorder);
    setActiveCell(id);
    console.log(dependency);
  };

  return (
    <div
      ref={cellRef}
      className={styles.cell}
      style={{
        width,
        height,
        border: borderStyle,
        backgroundColor: background,
        padding: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
        if (!isCellActive(id)) {
          setBorderStyle(intialBorder);
        }
      }}
      onClick={handleClick}
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
        <div
          style={{
            userSelect: "none",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {value}
        </div>
      )}
    </div>
  );
};

export default Cell;
