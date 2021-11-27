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
            maxWidth: "28em"
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover":{
            backgroundColor: theme.palette.secondary.light
        }
    },
    buttonContainer: {
        marginTop: "1em",
        marginBottom: "1em"
    },
    learnButtonHero: {
        borderColor: theme.palette.common.blue,
        color: theme.palette.common.blue,
        borderWidth: 2,
        borderRadius: 50,
        textTransform: "none",
        fontFamily: "roboto",
        fontWeight: "bold",
        fontSize: "0.9rem",
        height: 45,
        width: 145
    },
    mainContainer:{
        marginTop: "5em",
        [theme.breakpoints.down("md")]:{
            marginTop: "3em"
        },
        [theme.breakpoints.down("xs")]:{
            marginTop: "2em"
        }
    }
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
      <Grid container direction="column" className={classes.mainContainer}>
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
              <Grid container justify="center" className={classes.buttonContainer}>
                <Grid item>
                  <Button className={classes.estimateButton} variant="contained">Free Estimate</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" className={classes.learnButtonHero}>
                    <span style={{marginRight: 10}}>learn more</span>
                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
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
