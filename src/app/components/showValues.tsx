"use client";
import { Button } from "@mui/material";
import { useSpreadsheet } from "../context/SpreadSheetContext";

export default function ShowValuesButton() {
  const { showCellValue } = useSpreadsheet();

  return <Button onClick={showCellValue}>Check value</Button>;
}
