import React from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles((theme) => ({}));

const CustomSoftware = () => {
  const classes = useStyle();
  const theme = useTheme();
  return (
    <div>
      <Grid container direction="column">
        <Grid item container>
          <Grid item>
            <IconButton>
              <img src={backArrow} alt="back to service arrow" />
            </IconButton>
            <Grid item container direction="column">
              <Grid item>
                <Typography variant="h2">
                  Custom Software Development
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  Whether we’re replacing old software or inventing new
                  solutions, Arc Development is here to help your business
                  tackle technology.
                </Typography>
                <Typography variant="body1" paragraph>
                  Using regular commercial software leaves you with a lot of
                  stuff you don’t need, without some of the stuff you do need,
                  and ultimately controls the way you work. Without using any
                  software at all you risk falling behind competitors and
                  missing out on huge savings from increased efficiency.
                </Typography>
                <Typography variant="body1" paragraph>
                  Our custom solutions are designed from the ground up with your
                  needs, wants, and goals at the core. This collaborative
                  process produces finely tuned software that is much more
                  effective at improving your workflow and reducing costs than
                  generalized options.
                </Typography>
                <Typography variant="body1" paragraph>
                  We create exactly what you what, exactly how you want it.
                </Typography>
              </Grid>
              <Grid item>
                <IconButton>
                  <img src={forwardArrow} alt="go to website development " />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default CustomSoftware;
