import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ButtonArrow from "./ButtonArrow";
import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";
import revolutionBackground from "../../assets/repeatingBackground.svg";

const useStyle = makeStyles((theme) => ({
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
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
}));
const CallToAction = () => {
  const classes = useStyle();
  const theme = useTheme();
  return (
    <Grid
      container
      alignItems={"center"}
      className={classes.background}
      justify={"space-between"}
    >
      <Grid item style={{ marginLeft: "5em" }}>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software. <br /> Revolutionary Results{" "}
            </Typography>
            <Typography variant="subtitle2" style={{ fontSize: "1.5em" }}>
              Take Advantage of the 21st Century
            </Typography>
            <Grid container item>
              <Button
                component={Link}
                to="/revolution"
                variant="outlined"
                className={classes.learnButtonHero}
              >
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
      </Grid>
      <Grid item style={{ marginRight: "2em" }}>
        <Button variant={"contained"} className={classes.estimateButton}>
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
