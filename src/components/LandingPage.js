import { Grid, Typography } from "@material-ui/core";
import Lottie from "react-lottie";
import React from "react";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ui/ButtonArrow";
import { makeStyles,useTheme } from '@material-ui/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import animationData from "../animations/landinganimation/data";

const useStyle = makeStyles(theme => ({

    animation: {
        maxWidth: "50em",
        minWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%",
        [theme.breakpoints.down("sm")]: {
          maxWidth: "30em"
        }
    },
}));

const LandingPage = () => {
    const classes = useStyle();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  
    const defaultOptions = {
      loop: true,
      autoplay: false,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  return (
    <div>
      <Grid container direction="column">
        <Grid item>
          <Grid
            container
            justify="flex-end"
            alignItems="center"
            direction="row"
          >
            <Grid sm item>
              <Typography variant="h2" align="center">
                Bringing West Coast Technology
                <br />
                to the Midwest
                </Typography>
              <Grid container>
                <Grid item>
                  <Button variant="contained">Free Estimate</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined">
                    learn mouseOver
                    <ButtonArrow width={15} height={15} fill="red" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid sm item>
            <Lottie className={classes.animation} options={defaultOptions} height={"100%"} width={"100%"} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;
