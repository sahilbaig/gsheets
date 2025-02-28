"use client";
import { Grid, IconButton, Tooltip } from "@mui/material";
import styles from "../styles/primaryToolBar.module.css";
import { useSpreadsheet } from "../context/SpreadSheetContext";
import {
  FormatAlignLeft,
  ArrowUpward,
  ArrowDownward,
  Delete,
  FindReplace,
} from "@mui/icons-material";
import FunctionsBar from "./FunctionsBar";

const PrimaryToolBar = () => {
  const { updateCellValue, activeCell, selectedCells, cellValues } =
    useSpreadsheet();

  const functions = [
    { icon: <FormatAlignLeft />, label: "TRIM", onClick: handleTrim },
    { icon: <ArrowUpward />, label: "UPPER", onClick: handleUpper },
    { icon: <ArrowDownward />, label: "LOWER", onClick: handleLower },
    {
      icon: <Delete />,
      label: "REMOVE DUPLICATES",
      onClick: handleRemoveDuplicates,
    },
    {
      icon: <FindReplace />,
      label: "FIND_AND_REPLACE Coming soon",
      onClick: handleFindAndReplace,
    },
  ];

  function handleTrim() {
    if (activeCell && cellValues[activeCell]) {
      const currentValue = cellValues[activeCell];
      const trimmedValue = currentValue.replace(/\s+/g, "");
      updateCellValue(activeCell, trimmedValue);
    }
  }

  function handleUpper() {
    if (activeCell && cellValues[activeCell]) {
      const currentValue = cellValues[activeCell];
      const upperValue = currentValue.toUpperCase();
      updateCellValue(activeCell, upperValue);
    }
  }

  function handleLower() {
    if (activeCell && cellValues[activeCell]) {
      const currentValue = cellValues[activeCell];
      const lowerValue = currentValue.toLowerCase();
      updateCellValue(activeCell, lowerValue);
    }
  }

  function handleRemoveDuplicates() {
    const uniqueValues = new Set();
    selectedCells.forEach((cellId: number) => {
      const value = cellValues[cellId];
      if (uniqueValues.has(value)) {
        updateCellValue(cellId, "");
      } else {
        uniqueValues.add(value);
      }
    });
  }

  function handleFindAndReplace() {
    console.log("FIND_AND_REPLACE button clicked");
  }

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      className={styles.primaryToolBar}
      sx={{ minHeight: "0", padding: "2px 4px" }}
    >
      <Grid item sx={{ marginLeft: "8px" }}>
        <FunctionsBar />
      </Grid>
      <Grid item sx={{ marginLeft: "auto", display: "flex", gap: "4px" }}>
        {functions.map((func) => (
          <Tooltip key={func.label} title={func.label}>
            <IconButton
              size="small"
              sx={{ padding: "4px" }}
              onClick={func.onClick}
            >
              {func.icon}
            </IconButton>
          </Tooltip>
        ))}
      </Grid>
    </Grid>
  );
};

export default PrimaryToolBar;
