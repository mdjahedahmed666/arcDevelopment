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
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

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
        marginBottom: "2.5em",
        [theme.breakpoints.down("md")]: {
            marginBottom: "1.5em"
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "1em"
        }
    },
    logo: {
        height: "7em",
        [theme.breakpoints.down("md")]: {
            height: "5.5em"
        },
        [theme.breakpoints.down("xs")]: {
            height: "4em"
        }
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
    },
    drawerIcon: {
        height: "50px",
        width: "50px",
        color: "white"
    },
    drawerIconContainer: {
        marginLeft: "auto"
    }
}));

const Header = () => {
    const classes = useStyle();
    const theme = useTheme();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenMenu(true);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setOpenMenu(false);
    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null);
        setOpenMenu(false);
        setSelectedIndex(i);
    };

    const menuOptions = [
        { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
        {
            name: "Software Development",
            link: "/softwaredev",
            activeIndex: 1,
            selectedIndex: 1
        },
        {
            name: "App Development",
            link: "/appdev",
            activeIndex: 1,
            selectedIndex: 2
        },
        {
            name: "Website Development",
            link: "/websitedev",
            activeIndex: 1,
            selectedIndex: 3
        }
    ];

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
        switch (window.location.pathname) {
            case "/":
                if (value !== 0) {
                    setValue(0);
                }
                break;
            case "/services":
                if (value !== 1) {
                    setValue(1);
                }
                break;
            case "/softwaredev":
                if (value !== 1) {
                    setValue(1);
                }
                break;
            case "/appdev":
                if (value !== 1) {
                    setValue(1);
                }
                break;
            case "/websitedev":
                if (value !== 1) {
                    setValue(1);
                }
                break;
            case "/revolution":
                if (value !== 2) {
                    setValue(2);
                }
                break;
            case "/about":
                if (value !== 3) {
                    setValue(3);
                }
                break;
            case "/contact":
                if (value !== 4) {
                    setValue(4);
                }
                break;
            case "/estimate":
                if (value !== 5) {
                    setValue(5);
                }
                break;
            default:
                break;
        }
    }, [value])

    const tabs = (
        <>
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
                open={openMenu}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
                classes={{ paper: classes.menu }}
                elevation={0}
            >
                {
                    menuOptions.map((option, i) =>
                    (
                        <MenuItem key={option} component={Link} to={option.link} classes={{ root: classes.menuItem }} onClick={event => {
                            handleMenuItemClick(event, i);
                            setValue(1);
                            handleClose();
                        }} selected={i === selectedIndex && value === 1}>
                            {option.name}

                        </MenuItem>
                    ))
                }
                {/* <MenuItem onClick={() => { handleClose(); setValue(1) }} component={Link} to="/services" classes={{ root: classes.menuItem }}>Services</MenuItem>
                            <MenuItem onClick={() => { handleClose(); setValue(1) }} component={Link} to="/softwaredev" classes={{ root: classes.menuItem }}>Software Development</MenuItem>
                            <MenuItem onClick={() => { handleClose(); setValue(1) }} component={Link} to="/appdev" classes={{ root: classes.menuItem }}>App Development</MenuItem>
                            <MenuItem onClick={() => { handleClose(); setValue(1) }} component={Link} to="/websitedev" classes={{ root: classes.menuItem }}>Website Development</MenuItem> */}
            </Menu>
        </>
    )
    const drawer = (
        <>
            <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}>
                Drawer
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </>
    )
    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <Button component={Link} to="/" className={classes.logoContainer} onClick={() => setValue(0)} disableRipple>
                            <img src={logo} alt="company logo" className={classes.logo} />
                        </Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </>
    );
};

export default Header;
