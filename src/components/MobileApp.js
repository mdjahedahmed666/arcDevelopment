import {
  Grid,
  Hidden,
  IconButton,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import integrationAnimation from "../animations/integrationAnimation/data.json";

const useStyle = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1em",
      paddingRight: "1em",
    },
  },
}));

const MobileApp = (props) => {
  const classes = useStyle();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSX = useMediaQuery(theme.breakpoints.down("sx"));
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        justify={matchesMD ? "center" : undefined}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.5em" }}
          >
            <IconButton
              component={Link}
              to="/softwaredev"
              onClick={() => props.setSelectedIndex(1)}
            >
              <img src={backArrow} alt="back to Custom Software development" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h2">
              iOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Whether you want an app for your customers, employees, or
              yourself, we can build cross-platform native solutions for any
              part of your business process. This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Convenience. Connection.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              to="/websitedev"
              onClick={() => props.setSelectedIndex(3)}
            >
              <img src={forwardArrow} alt="go to website development " />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid item container direction="row" className={classes.rowContainer}>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography variant="h4">Integration</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
            <Typography variant="body1" paragraph>
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie options={defaultOptions} />
        </Grid>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography variant="h4" align="right">Simultaneous Platform Support</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph align="right">
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets — all at the same time.
            </Typography>
            <Typography variant="body1" paragraph align="right">
              This significantly reduces costs and creates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MobileApp;