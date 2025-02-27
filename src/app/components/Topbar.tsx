import { Grid2, Stack } from "@mui/material";
import styles from "../styles/topbar.module.css";
import ClickableIcon from "./ClickableIcon";
import MenuBar from "./MenuBar";

const TopBar = () => {
  return (
    <Grid2 container spacing={2} className={styles.topBar}>
      <Grid2>
        <ClickableIcon></ClickableIcon>
      </Grid2>
      <Grid2>
        <Stack spacing={1}>
          <p>Untitle spreadsheet</p>
          <MenuBar></MenuBar>
        </Stack>
      </Grid2>
    </Grid2>
  );
};

export default TopBar;
