import { Grid2 } from "@mui/material";
import styles from "../styles/dataToolBar.module.css";
import { useSpreadsheet } from "../context/SpreadSheetContext";
import FormulaBar from "./FormulaBar";

const DataToolBar = () => {
  const { activeCell } = useSpreadsheet();
  return (
    <Grid2 container spacing={2} className={styles.dataToolBar}>
      <Grid2>{activeCell} </Grid2>
      <Grid2>
        <FormulaBar></FormulaBar>
      </Grid2>
    </Grid2>
  );
};

export default DataToolBar;
