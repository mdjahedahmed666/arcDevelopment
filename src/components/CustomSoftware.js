import React from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import bulb from "../assets/bulb.svg";
import stopWatch from "../assets/stopwatch.svg";
import cash from "../assets/cash.svg";

const useStyle = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  mainContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    paddingTop: "2em",
    paddingBottom: "5em",
  },
}));

const CustomSoftware = (props) => {
  const classes = useStyle();
  const theme = useTheme();
  return (
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item container direction="row">
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.5em" }}
          >
            <IconButton
              component={Link}
              to="/services"
              onClick={() => props.setSelectedIndex(0)}
            >
              <img src={backArrow} alt="back to service arrow" />
            </IconButton>
          </Grid>
          <Grid item container direction="column" className={classes.heading}>
            <Grid item>
              <Typography variant="h2">Custom Software Development</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Whether we’re replacing old software or inventing new solutions,
                Arc Development is here to help your business tackle technology.
              </Typography>
              <Typography variant="body1" paragraph>
                Using regular commercial software leaves you with a lot of stuff
                you don’t need, without some of the stuff you do need, and
                ultimately controls the way you work. Without using any software
                at all you risk falling behind competitors and missing out on
                huge savings from increased efficiency.
              </Typography>
              <Typography variant="body1" paragraph>
                Our custom solutions are designed from the ground up with your
                needs, wants, and goals at the core. This collaborative process
                produces finely tuned software that is much more effective at
                improving your workflow and reducing costs than generalized
                options.
              </Typography>
              <Typography variant="body1" paragraph>
                We create exactly what you what, exactly how you want it.
              </Typography>
            </Grid>
          </Grid>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              to="/appdev"
              onClick={() => props.setSelectedIndex(2)}
            >
              <img src={forwardArrow} alt="go to website development " />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item container direction="row" justify="center" style={{marginTop:"10em", marginBottom:"10em"}}>
          <Grid item container direction="column" md alignItems="center">
            <Grid item>
              <Typography variant="h4">Save Energy</Typography>
            </Grid>
            <Grid item>
              <img src={bulb} alt="Ligh Bulb" />
            </Grid>
          </Grid>
          <Grid item container direction="column" md alignItems="center">
            <Grid item>
              <Typography variant="h4">Save Money</Typography>
            </Grid>
            <Grid item>
              <img src={cash} alt="Ligh Bulb" />
            </Grid>
          </Grid>
          <Grid item container direction="column" md alignItems="center">
            <Grid item>
              <Typography variant="h4">Save Time</Typography>
            </Grid>
            <Grid item>
              <img src={stopWatch} alt="Ligh Bulb" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
};

export default CustomSoftware;
