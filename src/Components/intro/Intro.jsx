import { Box, Grid, Typography, makeStyles, Link } from '@material-ui/core'
import React from 'react'
import { introInfo, introIcon } from '../../constants/projectData'

import introInfoImage from '../../images/introInfo_1.jpg'
const useStyle = makeStyles(theme => ({

    grid: {
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 'auto',
        // background: '#171717'
        background: '#000029',
    },
    div1: {
        margin: '1rem 5rem',
        // background: 'rgb(33 33 33)',
        display: 'flex',
        flexDirection: 'column',

        [theme.breakpoints.down('md')]: {
            margin: '1rem 3rem',
        },
        [theme.breakpoints.down('sm')]: {
            margin: '1rem',
        },
        [theme.breakpoints.down('xs')]: {
            margin: '1rem',
            padding: 'inherit'
        },

        '& > *': {
            color: 'white',
            margin: 'inherit',
            boxShadow: '1px 1px 8px 0px #fafafa',
            padding: '1rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            backgroundImage: `url(${introInfoImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',


            [theme.breakpoints.down('md')]: {
                margin: '1rem 55px',
            },
            [theme.breakpoints.down('sm')]: {
                margin: '0px',
            },
            [theme.breakpoints.down('xs')]: {
                margin: '0px',

            },

        }
    },

    iconContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',

        '& > *': {
            margin: '1rem 1rem',
            marginLeft: '0px',
            paddingLeft: '0px',
            padding: '0rem 1rem',

        },
        '& :hover': {
            cursor: 'pointer',

        }
    },

    ownerName: {
        fontSize: 'xx-large',
        // color: '#ff2a1a',
        boxShadow: '0px 1px 0px 0px ',
        fontFamily: 'Play',
        textTransform: 'capitalise',
        [theme.breakpoints.down('xs')]: {
            fontSize: '30px'
        },
    }

}))
const Intro = () => {
    const classes = useStyle()
    return (
        <Box container item lg={12} md={12} sm={12} xs={12} className={classes.grid}>
            <Grid container className={classes.div1}>
                <Box className={classes.mainDiv}>
                    {
                        introInfo.map(intro => (
                            <>
                                <Box className={classes.intro}>
                                    <Typography style={{ fontSize: 'x-large', color: '#d7d7ff', boxShadow: '0px 1px 0px 0px ', fontFamily: 'Play', textTransform: 'capitalise' }}>{intro.title}</Typography>
                                    <Typography className={classes.ownerName} > {intro.name} </Typography>
                                    <Typography style={{ fontSize: 'x-large', color: '#d7d7ff', boxShadow: '0px 1px 0px 0px ', fontFamily: 'Play', textTransform: 'capitalise' }}> {intro.passion} </Typography>
                                </Box>
                            </>
                        ))
                    }
                    {
                        introIcon.map(icon => (
                            <>
                                <Box className={classes.iconContent}>
                                    <Link href={icon.GithubLink} target="_blank" > <span> {icon.GitHubIcon} </span></Link>
                                    <Link href={icon.LinkdinLink} target="_blank"> <span> {icon.LinkdinIcon} </span></Link>
                                    <Link href={icon.InstaLink} target="_blank"> <span> {icon.InstaIcon} </span></Link>
                                    <Link href={icon.fbLink} target="_blank"> <span> {icon.fbIcon} </span></Link>
                                </Box>
                            </>
                        ))
                    }
                </Box>
            </Grid>
        </Box>
    )
}

export default Intro
