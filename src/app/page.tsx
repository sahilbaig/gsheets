import { Grid2 } from "@mui/material";
import TopBar from "./components/Topbar.tsx";
import PrimaryToolBar from "./components/PrimaryToolBar.tsx";
import SpreadSheet from "./components/Spreadsheet.tsx";

export default function Home() {
  return (
    <Grid2>
      <TopBar></TopBar>
      <PrimaryToolBar />
      <SpreadSheet rows={10} columns={10} />
    </Grid2>
  );
}
