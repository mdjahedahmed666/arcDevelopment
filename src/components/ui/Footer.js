import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import FooterAdornment from '../../assets/FooterAdornment.svg';

const useStyle = makeStyles(theme => ({

    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        position: 'relative',
        zIndex: 1302
    },
    footerImg: {
        width: "25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]: {
            width: "20em"
        },
        [theme.breakpoints.down("xs")]: {
            width: "15em"
        }
    },
    mainContainer: {
        position: "absolute"
    },
    link: {
        color: "white",
        fontFamily: "Arial",
        fontSize: "0.75rem",
        fontWeight: "bold",
        textDecoration: "none"
    },
    itemMargin: {
        margin: "3em"
    }
}));

const Footer = () => {
    const classes = useStyle();
    return (
        <footer className={classes.footer}>
            <Grid container justify="center" className={classes.mainContainer}>
                <Grid item className={classes.itemMargin}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/" className={classes.link}>
                            Home
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.itemMargin}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/services" className={classes.link}>
                            Services
                        </Grid>
                        <Grid item component={Link} to="/softwaredev" className={classes.link}>
                            Software Development
                        </Grid>
                        <Grid item component={Link} to="/appdev" className={classes.link}>
                            Apps Development
                        </Grid>
                        <Grid item component={Link} to="/websitedev" className={classes.link}>
                            Website Development
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.itemMargin}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link}>
                            Revolution
                        </Grid>
                        <Grid item className={classes.link}>
                            Vision
                        </Grid>
                        <Grid item className={classes.link}>
                            Technology
                        </Grid>
                        <Grid item className={classes.link}>
                            Process
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.itemMargin}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link}>
                            About us
                        </Grid>
                        <Grid item className={classes.link}>
                            History
                        </Grid>
                        <Grid item className={classes.link}>
                            Team
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.itemMargin}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link}>
                            Contact us
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <img className={classes.footerImg} src={FooterAdornment} alt="FooterAdornment" />
        </footer>
    );
};

export default Footer;
