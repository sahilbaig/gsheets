"use client";
import { Button } from "@mui/material";
import { useSpreadsheet } from "../context/SpreadSheetContext";

export default function ShowValuesButton() {
  const { selectedCells } = useSpreadsheet();

  return (
    <Button
      onClick={() => {
        console.log(selectedCells);
      }}
    >
      Check value
    </Button>
  );
}
