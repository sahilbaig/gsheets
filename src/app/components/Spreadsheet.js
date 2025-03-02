"use client";
import React, { useState } from "react";
import Cell from "./Cells";
import { useSpreadsheet } from "../context/SpreadSheetContext";

const SpreadSheet = ({ rows = 20, columns = 13 }) => {
  const { setIsSelectionStarted, clearSelectedCells } = useSpreadsheet();
  const columnLabels = Array.from({ length: columns }, (_, i) =>
    String.fromCharCode(65 + i)
  ); // A-M
  const rowLabels = Array.from({ length: rows }, (_, i) => i + 1); // 1-20

  const [columnWidths, setColumnWidths] = useState(
    new Array(columns).fill(100)
  );
  const [rowHeights, setRowHeights] = useState(new Array(rows).fill(30));

  const handleColumnResize = (index, event) => {
    event.preventDefault();
    document.onmousemove = (e) => {
      const newWidths = [...columnWidths];
      newWidths[index] = Math.max(
        40,
        e.clientX - event.target.getBoundingClientRect().left
      );
      setColumnWidths(newWidths);
    };
    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };

  const handleRowResize = (index, event) => {
    event.preventDefault();
    document.onmousemove = (e) => {
      const newHeights = [...rowHeights];
      newHeights[index] = Math.max(
        20,
        e.clientY - event.target.getBoundingClientRect().top
      );
      setRowHeights(newHeights);
    };
    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `50px ${columnWidths
          .map((w) => `${w}px`)
          .join(" ")}`,
        border: "1px solid #ccc",
      }}
      onMouseDown={() => {
        setIsSelectionStarted(true);
        clearSelectedCells();
      }}
      onMouseUp={() => setIsSelectionStarted(false)}
    >
      {/* Empty corner cell */}
      <div style={{ border: "1px solid #ccc", background: "#f0f0f0" }}></div>

      {/* Column headers with resizers */}
      {columnLabels.map((label, index) => (
        <div
          key={label}
          style={{
            textAlign: "center",
            position: "relative",
            width: columnWidths[index],
            border: "1px solid #ccc",
            background: "#FFFFFF",
          }}
        >
          {label}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: "5px",
              height: "100%",
              cursor: "col-resize",
              backgroundColor: "transparent",
            }}
            onMouseDown={(e) => handleColumnResize(index, e)}
          />
        </div>
      ))}

      {/* Row headers + Cells */}
      {rowLabels.map((row, rowIndex) => (
        <React.Fragment key={`row-${row}`}>
          <div
            style={{
              fontWeight: "bold",
              textAlign: "center",
              position: "relative",
              height: rowHeights[rowIndex],
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #ccc",
              background: "#FFFFFF",
            }}
          >
            {row}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "5px",
                cursor: "row-resize",
                backgroundColor: "transparent",
              }}
              onMouseDown={(e) => handleRowResize(rowIndex, e)}
            />
          </div>
          {columnLabels.map((col, colIndex) => (
            <Cell
              key={`${col}${row}`}
              id={`${col}${row}`}
              width={columnWidths[colIndex]}
              height={rowHeights[rowIndex]}
              style={{ border: "1px solid #ccc" }}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SpreadSheet;
