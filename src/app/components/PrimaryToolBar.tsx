import { Grid2 } from "@mui/material";
import styles from "../styles/primaryToolBar.module.css";
import FunctionsBar from "./FunctionsBar";
const PrimaryToolBar = () => {
  return (
    <Grid2 container spacing={2} className={styles.primaryToolBar}>
      <Grid2>
        <FunctionsBar />
      </Grid2>
      <Grid2>2</Grid2>
      <Grid2>3</Grid2>
    </Grid2>
  );
};
export default PrimaryToolBar;
