import { Grid, Typography } from "@material-ui/core";
import Lottie from "react-lottie";
import React from "react";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ui/ButtonArrow";
import { makeStyles, useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import animationData from "../animations/landinganimation/data";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";

const useStyle = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "28em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
    marginBottom: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em"
    }
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange
  },
  subtitle: {
    marginBottom: "1em"
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  },
  serviceContainer: {
    marginTop: "8em",
    [theme.breakpoints.down("sm")]: {
      padding: 10
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
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item >
        {/*-----Hero Block----- */}
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Bringing West Coast Technology
              <br />
              to the Midwest
            </Typography>
            <Grid
              container
              justify="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button className={classes.estimateButton} variant="contained">
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButtonHero}>
                  <span style={{ marginRight: 10 }}>learn more</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item>
            <Lottie
              className={classes.animation}
              options={defaultOptions}
              height={"100%"}
              width={"100%"}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Custom Software Development----- */}
        <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM? "center":undefined}>
          <Grid item style={{ marginLeft:matchesSM?0:"5em",textAlign:matchesSM?"center":undefined }}>
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
                  <span style={{ marginRight: 10 }}>learn more</span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.blue}
                  />
                </Button>
          </Grid>
          <Grid item>
          <img className={classes.icon} src={customSoftwareIcon} alt="custom software icon"/>
          </Grid>
        </Grid>
        <Grid item>
          {/*-----Mobile Apps development----- */}
          <Grid container direction="row" className={classes.serviceContainer}
                justify={matchesSM ? "center" : "flex-end"}>
            <Grid item style={{textAlign: matchesSM ? "center" : undefined}}>
              <Typography variant="h4">Mobile Apps Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Extend Functionality. Extend Access. Increase Engagement.
              </Typography>
              <Typography variant="subtitle1">
                Integrate your web experience or create standalone app {matchesSM ? null : <br/>} with either mobile
                platform
              </Typography>
              <Button variant="outlined" className={classes.learnButton}>
                <span style={{marginRight: 10}}>learn more</span>
                <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}>
              <img className={classes.icon} src={mobileAppsIcon} alt="mobileAppsIcon"/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/*-----Custom Software Development----- */}
          <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM? "center":undefined}>
            <Grid item style={{ marginLeft:matchesSM?0:"5em",textAlign:matchesSM?"center":undefined }}>
              <Typography variant="h4">Custom Software Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Reach More. Discover More. Sell More.
              </Typography>
              <Typography variant="subtitle1">
                Optimized for Search Engines, built for speed.
              </Typography>
              <Button variant="outlined" className={classes.learnButton}>
                <span style={{ marginRight: 10 }}>learn more</span>
                <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item>
              <img className={classes.icon} src={websitesIcon} alt="websitesIcon"/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
