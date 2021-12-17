import React from "react";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import FooterAdornment from "../../assets/FooterAdornment.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const useStyle = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    position: "relative",
    zIndex: 1302,
  },
  footerImg: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "20em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  itemMargin: {
    margin: "3em",
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "3em",
      width: "3em",
    },
  },
  socialContainer: {
    padding: "1em",
    position: "absolute",
    marginTop: "-6em",
    right: "1.5 em",
  },
}));

const Footer = (props) => {
  const classes = useStyle();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.itemMargin}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                onClick={() => props.setValue(0)}
                component={Link}
                to="/"
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.itemMargin}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
                component={Link}
                to="/services"
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                item
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
                component={Link}
                to="/softwaredev"
                className={classes.link}
              >
                Software Development
              </Grid>
              <Grid
                item
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
                component={Link}
                to="/appdev"
                className={classes.link}
              >
                Apps Development
              </Grid>
              <Grid
                item
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
                component={Link}
                to="/websitedev"
                className={classes.link}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.itemMargin}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                onClick={() => props.setValue(2)}
                className={classes.link}
              >
                Revolution
              </Grid>
              <Grid
                item
                onClick={() => props.setValue(2)}
                className={classes.link}
              >
                Vision
              </Grid>
              <Grid
                item
                onClick={() => props.setValue(2)}
                className={classes.link}
              >
                Technology
              </Grid>
              <Grid
                item
                onClick={() => props.setValue(2)}
                className={classes.link}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.itemMargin}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                onClick={() => props.setValue(3)}
                className={classes.link}
              >
                About us
              </Grid>
              <Grid
                item
                onClick={() => props.setValue(3)}
                className={classes.link}
              >
                History
              </Grid>
              <Grid
                item
                onClick={() => props.setValue(3)}
                className={classes.link}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.itemMargin}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                onClick={() => props.setValue(2)}
                className={classes.link}
              >
                Contact us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        className={classes.footerImg}
        src={FooterAdornment}
        alt="FooterAdornment"
      />
      <Grid container justify="flex-end" className={classes.socialContainer}>
        <Grid
          item
          component={"a"}
          href="www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
          className={classes.icon}
          style={{ marginRight: "1em" }}
        >
          <img src={facebook} alt="facebook" />
        </Grid>
        <Grid
          item
          component={"a"}
          href="www.twitte.com"
          rel="noopener noreferrer"
          target="_blank"
          className={classes.icon}
          style={{ marginRight: "1em" }}
        >
          <img src={twitter} alt="twitter" />
        </Grid>
        <Grid
          item
          component={"a"}
          href="www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
          className={classes.icon}
        >
          <img src={instagram} alt="instagram" />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
