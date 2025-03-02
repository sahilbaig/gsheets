"use client";
import { SpreadsheetProvider } from "./context/SpreadSheetContext";
import Grid from "@mui/material/Grid";
import TopBar from "./components/Topbar.js";
import PrimaryToolBar from "./components/PrimaryToolBar.tsx";
import SpreadSheet from "./components/Spreadsheet.tsx";
import DataToolBar from "./components/DataToolBar";

export default function Home() {
  return (
    <SpreadsheetProvider>
      <Grid container>
        <Grid item xs={12}>
          <TopBar />
        </Grid>
        <Grid item xs={12}>
          <PrimaryToolBar />
        </Grid>
        <Grid item xs={12}>
          <DataToolBar />
        </Grid>
        <Grid item xs={12}>
          <SpreadSheet />
        </Grid>
      </Grid>
    </SpreadsheetProvider>
  );
}
