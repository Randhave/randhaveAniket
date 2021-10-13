import React from 'react'
import { AppBar, Toolbar, Box, Typography, List, ListItem, makeStyles, IconButton, Drawer } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { Menu } from '@material-ui/icons'
import { useState } from 'react'

const useStyle = makeStyles(theme => ({
    appBar: {
        // backgroundColor: '#171923' 
        backgroundColor: '#000029'
    },
    navDiv: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    text: {
        textDecoration: 'none',
        color: 'white',
        margin: '0px 8px',
        fontFamily: 'Play',
        padding: '1px 13px',
        '&:hover': {
            cursor: 'pointer',
            textDecoration: 'none',
            boxShadow: '0px 2px 0px 0px wheat',
        },

    },
    menuText: {
        textDecoration: 'none',
        color: 'white',
        margin: '2rem',
        fontFamily: 'Play',
        padding: '1px 13px',
    },
    menuDiv: {
        textAlign: 'center',
        backgroundColor: '#000029',
        width: '15rem',
        height: '100vh',
        '& > *': {
            padding: '1rem 0rem'
        }
    },
    MenuIcon: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },

}))
const Navbar = () => {
    const classes = useStyle()
    const [open, setopen] = useState(false);

    const handleOpen = () => {
        setopen(true)

    }
    const handleClose = () => {
        setopen(false)
    }
    const showNavbar = () => (
        <Box className={classes.menuDiv} >
            <NavLink onClick={handleClose} style={{ textDecoration: 'none', textAlign: 'initial' }} to='/'> <Typography className={classes.menuText} >Home</Typography> </NavLink>
            <NavLink onClick={handleClose} style={{ textDecoration: 'none', textAlign: 'initial' }} to='/about'> <Typography className={classes.menuText}>About</Typography> </NavLink>
            <NavLink onClick={handleClose} style={{ textDecoration: 'none', textAlign: 'initial' }} to='/service'> <Typography className={classes.menuText} >Service</Typography> </NavLink>
            <NavLink onClick={handleClose} style={{ textDecoration: 'none', textAlign: 'initial' }} to='/skill'> <Typography className={classes.menuText}>Skills</Typography> </NavLink>
            <NavLink onClick={handleClose} style={{ textDecoration: 'none', textAlign: 'initial' }} to='/contact'> <Typography className={classes.menuText}>Contact</Typography> </NavLink>
            <NavLink onClick={handleClose} style={{ textDecoration: 'none', textAlign: 'initial' }} to='/work'> <Typography className={classes.menuText}>Work</Typography> </NavLink>
        </Box>
    )
    return (
        <AppBar className={classes.appBar} position="static">
            <Toolbar variant="dense">

                <IconButton className={classes.MenuIcon} onClick={handleOpen} color='inherit'>
                    <Menu />
                </IconButton>
                <Drawer onClose={handleClose} open={open}>
                    {showNavbar()}
                </Drawer>

                <Box className={classes.navDiv}>
                    <List className={classes.List}>
                        <ListItem className={classes.listItem}>
                            <NavLink style={{ textDecoration: 'none' }} to='/'> <Typography className={classes.text}>Home</Typography> </NavLink>
                            <NavLink style={{ textDecoration: 'none' }} to='randhaveAniket/about'> <Typography className={classes.text}>About</Typography> </NavLink>
                            <NavLink style={{ textDecoration: 'none' }} to='/service'> <Typography className={classes.text}>Service</Typography> </NavLink>
                            <NavLink style={{ textDecoration: 'none' }} to='/skill'> <Typography className={classes.text}>Skills</Typography> </NavLink>
                            <NavLink style={{ textDecoration: 'none' }} to='/work'> <Typography className={classes.text}>Work</Typography> </NavLink>
                            <NavLink style={{ textDecoration: 'none' }} to='/contact'> <Typography className={classes.text}>Contact</Typography> </NavLink>

                        </ListItem>
                    </List>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
