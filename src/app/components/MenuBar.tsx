import { Grid2 } from "@mui/material";

const MenuBar = () => {
  return (
    <Grid2 container spacing={1}>
      <Grid2>File</Grid2>
      <Grid2>Edit</Grid2>
      <Grid2>View</Grid2>
      <Grid2>Insert</Grid2>
      <Grid2>Format</Grid2>
    </Grid2>
  );
};

export default MenuBar;
