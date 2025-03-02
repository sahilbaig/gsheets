import { useState, KeyboardEvent, ChangeEvent } from "react";
import { TextField } from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";
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

  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    if (activeCell) updateCellValue(activeCell, value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!activeCell) return;

    const value = inputValue.trim().toUpperCase();

    if (event.key === "Enter") {
      switch (value) {
        case "=SUM":
          updateCellValue(activeCell, sum);
          updateCellType(activeCell, "sum");
          break;
        case "=MAX":
          updateCellValue(activeCell, max);
          updateCellType(activeCell, "max");
          break;
        case "=MIN":
          updateCellValue(activeCell, min);
          updateCellType(activeCell, "min");
          break;
        case "=COUNT":
          updateCellValue(activeCell, count);
          updateCellType(activeCell, "count");
          break;
        case "=AVERAGE":
          updateCellValue(activeCell, average);
          updateCellType(activeCell, "avg");
          break;
        default:
          updateCellValue(activeCell, inputValue);
      }
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
      <div style={{ padding: "4px 8px", color: "#666" }}>
        <CalculateIcon fontSize="small" />
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
