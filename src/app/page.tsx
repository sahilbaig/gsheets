// app/page.js
import { SpreadsheetProvider } from "./context/SpreadSheetContext";
import Grid from "@mui/material/Grid";
import TopBar from "./components/Topbar.tsx";
import PrimaryToolBar from "./components/PrimaryToolBar.tsx";
import SpreadSheet from "./components/Spreadsheet.tsx";

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
          <SpreadSheet rows={10} columns={10} />
        </Grid>
      </Grid>
      <h1>Start adding drag</h1>
    </SpreadsheetProvider>
  );
}

// statrt adding drag feature
