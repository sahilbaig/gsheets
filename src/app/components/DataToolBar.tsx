import { Grid2 } from "@mui/material";
import styles from "../styles/dataToolBar.module.css";
import { useSpreadsheet } from "../context/SpreadSheetContext";
import FormulaBar from "./FormulaBar";

const DataToolBar = () => {
  const { activeCell } = useSpreadsheet();

  return (
    <Grid2
      container
      spacing={2}
      className={styles.dataToolBar}
      alignItems="center"
    >
      <Grid2 sx={{ display: "flex", alignItems: "center", marginLeft: "10px" }}>
        {activeCell}
      </Grid2>
      <Grid2>
        <FormulaBar />
      </Grid2>
    </Grid2>
  );
};

export default DataToolBar;
