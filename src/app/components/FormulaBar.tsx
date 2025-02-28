import { TextField } from "@mui/material";
import { useSpreadsheet } from "../context/SpreadSheetContext";
import FunctionsIcon from "@mui/icons-material/Functions"; // Formula icon

const FormulaBar = () => {
  const { activeCell, cellValues, updateCellValue } = useSpreadsheet();

  const handleChange = (event) => {
    if (activeCell) {
      updateCellValue(activeCell, event.target.value);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
      {/* Formula icon */}
      <div style={{ padding: "4px 8px", color: "#666" }}>
        <FunctionsIcon fontSize="small" />
      </div>

      {/* Input field */}
      <TextField
        fullWidth
        variant="standard"
        value={activeCell ? cellValues[activeCell] || "" : ""}
        onChange={handleChange}
        disabled={!activeCell}
        InputProps={{
          disableUnderline: true,
          sx: {
            padding: "2px 8px",
            fontSize: "14px",
            height: "24px",
          },
        }}
        sx={{
          flex: 1,
          minWidth: 0,
          backgroundColor: "transparent",
        }}
      />
    </div>
  );
};

export default FormulaBar;
