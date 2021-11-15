import { AppBar, Toolbar, useScrollTrigger } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyle = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em"
    },
    logo: {
        height: "6em"
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    tabContainer: {
        marginLeft: "auto"
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px",
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: "white",
        borderRadius: "0px"
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    }
}));

const Header = () => {
    const classes = useStyle();
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        if (window.location.pathname === "/" && value !== 0) {
            setValue(0);
        } else if (window.location.pathname === "/services" && value !== 1) {
            setValue(1);
        } else if (window.location.pathname === "/revolution" && value !== 2) {
            setValue(2);
        } else if (window.location.pathname === "/about" && value !== 3) {
            setValue(3);
        } else if (window.location.pathname === "/contact" && value !== 4) {
            setValue(4);
        } else if (window.location.pathname === "/estimate" && value !== 5) {
            setValue(5);
        }
    }, [value])
    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <Button component={Link} to="/" className={classes.logoContainer} onClick={() => setValue(0)} disableRipple>
                            <img src={logo} alt="company logo" className={classes.logo} />
                        </Button>
                        <Tabs value={value} onChange={handleChange} className={classes.tabContainer} indicatorColor="primary">
                            <Tab component={Link} to="/" className={classes.tab} label="Home" />
                            <Tab aria-owns={anchorEl ? "simple-menu" : undefined} aria-haspopup={anchorEl ? "true" : undefined} onMouseOver={event => handleClick(event)} component={Link} to="/services" className={classes.tab} label="Services" />
                            <Tab component={Link} to="/revolution" className={classes.tab} label="Revolution" />
                            <Tab component={Link} to="/about" className={classes.tab} label="About Us" />
                            <Tab component={Link} to="/contact" className={classes.tab} label="Contact Us" />
                        </Tabs>
                        <Button variant="contained" color="secondary" className={classes.button}>Free Estimate</Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{ onMouseLeave: handleClose }}
                            classes={{ paper: classes.menu }}
                            elevation={0}
                        >
                            <MenuItem onClick={() => { handleClose(); setValue(1) }} component={Link} to="/services" classes={{ root: classes.menuItem }}>Services</MenuItem>
                            <MenuItem onClick={() => { handleClose(); setValue(1) }} component={Link} to="/softwaredev" classes={{ root: classes.menuItem }}>Software Development</MenuItem>
                            <MenuItem onClick={() => { handleClose(); setValue(1) }} component={Link} to="/appdev" classes={{ root: classes.menuItem }}>App Development</MenuItem>
                            <MenuItem onClick={() => { handleClose(); setValue(1) }} component={Link} to="/websitedev" classes={{ root: classes.menuItem }}>Website Development</MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </>
    );
};

export default Header;