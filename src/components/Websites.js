import {
  Grid,
  Hidden,
  IconButton,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import analytics from "../assets/analytics.svg";
import seo from "../assets/seo.svg";
import outreach from "../assets/outreach.svg";
import ecommerce from "../assets/ecommerce.svg";
import CallToAction from "./ui/CallToAction";

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
  paragraphContainer: {
    maxWidth: "30em",
  },
}));

const Websites = (props) => {
  const classes = useStyle();
  const theme = useTheme();
  const matchesSX = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
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
              to="/appdev"
              onClick={() => props.setSelectedIndex(2)}
            >
              <img src={backArrow} alt="back to Custom Software development" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h2">
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Having a website is a necessity in today’s business world. They
              give you one central, public location to let people know who you
              are, what you do, and why you’re the best at it.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              From simply having your hours posted to having a full fledged
              online store, making yourself as accessible as possible to users
              online drives growth and enables you to reach new customers.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              to="/services"
              onClick={() => props.setSelectedIndex(0)}
            >
              <img src={forwardArrow} alt="go to Services " />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{marginTop:"10em"}}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : undefined}>Analytics</Typography>
            </Grid>
            <Grid item>
              <img
                src={analytics}
                style={{ marginLeft: "-2.75em" }}
                alt="graph with magnifying class"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{marginLeft: matchesSM ? 0:"1em"}}>
          <Typography align={matchesMD ? "center" : undefined}variant="body1" className={classes.paragraphContainer}>
            Knowledge is power, and data is 21st Century gold. Analyzing this
            data can reveal hidden patterns and trends in your business,
            empowering you to make smarter decisions with measurable effects.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        justify="flex-end"
        alignItems="center"
        className={classes.rowContainer}
        style={{marginTop:"10em"}}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" align="center">E-Commerce</Typography>
            </Grid>
            <Grid item>
              <img src={ecommerce} alt="orld outline made of dollar signs" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer} style={{marginLeft: matchesSM ? 0:"1em"}}>
          <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
            It’s no secret that people like to shop online.
          </Typography>
          <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
            In 2017 over $2.3 trillion was spent in e-commerce, and it’s time
            for your slice of that pie.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{marginTop:"10em"}}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : undefined}>Outreach</Typography>
            </Grid>
            <Grid item>
              <img src={outreach} alt="megaphone" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer} style={{marginLeft: matchesSM ? 0:"1em"}}>
          <Typography align={matchesMD ? "center" : undefined} variant="body1">
            Draw people in with a dazzling website. Showing off your products
            online is a great way to help customers decide what’s right for them
            before visiting in person.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        justify="flex-end"
        alignItems="center"
        className={classes.rowContainer}
        style={{marginTop:"10em", marginBottom: "10em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" align="center">Search Engine
                <br />
                Optimization</Typography>
            </Grid>
            <Grid item>
              <img src={seo} alt="website standing on winner's podium" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer} style={{marginLeft: matchesSM ? 0:"1em"}}>
          <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
            How often have you ever been to the second page of Google results?
          </Typography>
          <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
            If you’re like us, probably never.
          </Typography>
          <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
            Customers don’t go there either, so we make sure your website is
            designed to end up on top.
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue}/>
      </Grid>
    </Grid>
  );
};

export default Websites;
