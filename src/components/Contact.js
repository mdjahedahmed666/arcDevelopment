import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Grid,
  useTheme,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import background from "../assets/background.jpg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import airplane from "../assets/send.svg";
import ButtonArrow from "./ui/ButtonArrow";

const useStyle = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginLeft: 0,
      marginTop: "2em",
    },
  },
}));

const Contact = (props) => {
  const classes = useStyle();
  const theme = useTheme();
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const [message,setMessage]=useState('');
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container direction="row">
      <Grid item container direction="column" justifyContent="center" lg={3}>
        <Grid item>
          <Typography variant="h2" style={{ LineHeight: 1 }}>
            Contact us
          </Typography>
          <Typography
            variant="body1"
            paragraph
            style={{ color: theme.palette.common.blue }}
          >
            We are waiting
          </Typography>
        </Grid>
        <Grid item container>
          <Grid item>
            <img
              src={phoneIcon}
              alt={phoneIcon}
              style={{ marginRight: "0.5em" }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant={"body1"}
              style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
            >
              +880 1797213005
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item>
            <img
              src={emailIcon}
              alt={emailIcon}
              style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant={"body1"}
              style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
            >
              mdjahedahmed12@gmail.com
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item>
            <TextField label="Name" id="name" value={name} onChange={(event)=>setName(event.target.value)}></TextField>
          </Grid>
          <Grid item>
          <TextField label="Email" id="email" value={email} onChange={(event)=>setEmail(event.target.value)}></TextField>
          </Grid>
          <Grid item>
          <TextField label="Phone" id="phone" value={phone} onChange={(event)=>setPhone(event.target.value)}></TextField>
          </Grid>
        </Grid>
        <Grid item>
          <TextField id="message" value={message} onChange={(event)=>setMessage(event.target.value)} multiline rows={5}></TextField>
        </Grid>
        <Grid item>
          <Button variant="contained">Send Message
          <img src={airplane} alt="aireplane" />
          </Button>
        </Grid>
      </Grid>
      <Grid item container alignItems="center" className={classes.background} lg={9}>
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          textAlign: matchesSM ? "center" : "inherit",
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software. <br /> Revolutionary Results{" "}
            </Typography>
            <Typography variant="subtitle2" style={{ fontSize: "1.5em" }}>
              Take Advantage of the 21st Century
            </Typography>
            <Grid container item justify={matchesSM ? "center" : undefined}>
              <Button
                component={Link}
                to="/revolution"
                variant="outlined"
                className={classes.learnButtonHero}
                onClick={() => props.setValue(2)}
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
      <Grid item style={{ marginRight: matchesSM ? 0 : "2em" }}>
        <Button
        component={Link}
        to={"/estimate"}
          variant={"contained"}
          className={classes.estimateButton}
          onClick={()=> props.setValue(5)}
        >
          Free Estimate
        </Button>
      </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
