import {
  Button,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import ButtonArrow from "./ui/ButtonArrow";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "4em",
    [theme.breakpoints.down("sm")]: {
      padding: 10,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
}));

const Services = (props) => {
  const classes = useStyle();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Grid container direction="column">
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : "5em",
            marginTop: matchesSM ? "1em" : "2em",
          }}
        >
          <Typography align={matchesSM ? "center" : undefined} variant="h2">
            Services
          </Typography>
        </Grid>
        <Grid item>
          {/*-----Mobile Apps development----- */}
          <Grid
            container
            direction="row"
            className={classes.serviceContainer}
            justify={matchesSM ? "center" : "flex-end"}
          >
            <Grid
              item
              style={{
                textAlign: matchesSM ? "center" : undefined,
                width: matchesSM ? undefined : "35em",
              }}
            >
              <Typography variant="h4">Mobile Apps Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Extend Functionality. Extend Access. Increase Engagement.
              </Typography>
              <Typography variant="subtitle1">
                Integrate your web experience or create standalone app{" "}
                {matchesSM ? null : <br />} with either mobile platform
              </Typography>
              <Button
                component={Link}
                to={"/appdev"}
                variant="outlined"
                className={classes.learnButton}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
              >
                <span style={{ marginRight: 10 }}>learn more</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
              <img
                className={classes.icon}
                src={mobileAppsIcon}
                alt="mobileAppsIcon"
                width={"250em"}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          {/*-----Custom Software Development----- */}
          <Grid
            container
            direction="row"
            className={classes.serviceContainer}
            justify={matchesSM ? "center" : undefined}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : "5em",
                textAlign: matchesSM ? "center" : undefined,
              }}
            >
              <Typography variant="h4">Custom Software Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Save Energy. Save Time. Save Money.
              </Typography>
              <Typography variant="subtitle1">
                Complete digital solutions, from investigation to{" "}
                <span className={classes.specialText}>celebration.</span>
              </Typography>
              <Button
                component={Link}
                to={"/softwaredev"}
                variant="outlined"
                className={classes.learnButton}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
              >
                <span style={{ marginRight: 10 }}>learn more</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item>
              <img
                className={classes.icon}
                src={customSoftwareIcon}
                alt="custom software icon"
              />
            </Grid>
          </Grid>

          <Grid item style={{ marginBottom: "5em" }}>
            {/*-----Website Development----- */}
            <Grid
              container
              direction="row"
              className={classes.serviceContainer}
              justify={matchesSM ? "center" : "flex-end"}
            >
              <Grid
                item
                style={{
                  textAlign: matchesSM ? "center" : undefined,
                  width: matchesSM ? undefined : "35em",
                }}
              >
                <Typography variant="h4">Website Development</Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                  Reach More. Discover More. Sell More.
                </Typography>
                <Typography variant="subtitle1">
                  Optimized for Search Engines, built for speed.
                </Typography>
                <Button
                  component={Link}
                  to={"/websitedev"}
                  variant="outlined"
                  className={classes.learnButton}
                  onClick={() => {
                    props.setValue(1);
                    props.setSelectedIndex(3);
                  }}
                >
                  <span style={{ marginRight: 10 }}>learn more</span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
              <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
                <img
                  className={classes.icon}
                  src={websitesIcon}
                  alt="websitesIcon"
                  width={"250em"}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;
