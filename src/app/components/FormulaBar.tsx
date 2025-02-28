import { useState } from "react";
import { TextField } from "@mui/material";
import FunctionsIcon from "@mui/icons-material/Functions";
import { useSpreadsheet } from "../context/SpreadSheetContext";
import {
  useSum,
  useMax,
  useMin,
  useCount,
  useAverage,
} from "../utils/functions";
const FormulaBar = () => {
  const { activeCell, updateCellType, updateCellValue } = useSpreadsheet();
  const sum = useSum();
  const max = useMax();
  const min = useMin();
  const count = useCount();
  const average = useAverage();

  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (activeCell) {
      updateCellValue(activeCell, value);
      updateCellType(activeCell, value.startsWith("=") ? "formula" : "text");
    }
  };

  const handleKeyDown = (event) => {
    const value = event.target.value.trim().toUpperCase();

    if (event.key === "Enter" && activeCell) {
      switch (value) {
        case "=SUM":
          updateCellValue(activeCell, sum);
          break;
        case "=MAX":
          updateCellValue(activeCell, max);

          break;
        case "=MIN":
          updateCellValue(activeCell, min);
          break;
        case "=COUNT":
          updateCellValue(activeCell, count);
          break;
        case "=AVERAGE":
          updateCellValue(activeCell, average);
          break;
        default:
          updateCellValue(activeCell, event.target.value);
      }
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
      <div style={{ padding: "4px 8px", color: "#666" }}>
        <FunctionsIcon fontSize="small" />
      </div>

      <TextField
        fullWidth
        variant="standard"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={!activeCell}
        InputProps={{
          disableUnderline: true,
          sx: { padding: "2px 8px", fontSize: "14px", height: "24px" },
        }}
        sx={{ flex: 1, minWidth: 0, backgroundColor: "transparent" }}
      />
    </div>
  );
};

export default FormulaBar;
