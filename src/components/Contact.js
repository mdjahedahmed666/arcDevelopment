import React from "react";
import { Link } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Grid,
  useTheme,
  makeStyles,
} from "@material-ui/core";
import background from "../assets/background.jpg"

const useStyle = makeStyles((theme) => ({
    background: {
        backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    }
}));

const Contact = () => {
  const classes = useStyle();
  const theme = useTheme();
  return (
    <Grid container direction="row">
      <Grid item container direction="column" lg={3}>
        <Grid item>
          <Typography variant="h2" style={{ LineHeight: 1 }}>Contact us</Typography>
          <Typography variant="body1" paragraph style={{color: theme.palette.common.blue}}>We are waiting</Typography>
        </Grid>
      </Grid>
      <Grid item container className={classes.background} lg={9}></Grid>
    </Grid>
  );
};

export default Contact;
