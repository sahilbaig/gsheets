// components/Spreadsheet.tsx
"use client";
import Cell from "./Cells";
import { useSpreadsheet } from "../context/SpreadSheetContext";

const SpreadSheet = ({ rows = 5, columns = 5 }) => {
  const { setIsSelectionStarted, clearSelectedCells } = useSpreadsheet();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 100px)`,
      }}
      onMouseDown={() => {
        setIsSelectionStarted(true);
        clearSelectedCells();
      }}
      onMouseUp={() => {
        setIsSelectionStarted(false);
      }}
    >
      {Array.from({ length: rows * columns }).map((_, index) => (
        <Cell key={index} id={index} />
      ))}
    </div>
  );
};

export default SpreadSheet;
