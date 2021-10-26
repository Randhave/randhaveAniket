import { Grid, Typography, makeStyles, Box } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles(theme => ({
    grid1: {
        width: 'auto',
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        // background: '#171717',
        background: '#000029',
        padding: '1rem'
    },
    div1: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        // background: 'rgb(33, 33, 33)'
        background: 'rgb(0 0 0 / 26%)'

    },
    heading: {
        padding: '0rem 3rem',
        margin: '1rem 42px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 'auto',

        '& > *': {
            boxShadow: '0px 1px 0px 0px #1515ea',
            fontSize: 'x-large',
            color: 'white',
            padding: '5px',
            fontFamily: 'Play',
        }
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: '2rem 3rem',
        '& > *': {
            '& > *': {
                color: 'white',
                padding: '7px 42px',
                fontWeight: '400px',
                fontSize: '13px',
                fontFamily: 'Play'
            }
        },
        [theme.breakpoints.down('xs')]: {
            padding: '2rem 1rem'
        },
    }
}))
const About = () => {
    const classes = useStyle()
    return (
        <Grid className={classes.grid1} container item lg={12} md={12} sm={12} xm={12}>
            <Box className={classes.heading}>
                <Typography >About</Typography>
            </Box>
            <Box className={classes.div1}>

                <Box className={classes.text}>
                    <Box>
                        <Typography>
                            I'm  Freshman pursuing Computer Science Engineering. I am always ready to gain new experience, meet new people
                            and learn new things.  <br /> I find the idea of creating value for people and impacting the world through my work gratifying by the
                            way, check out my awesome work.
                        </Typography>
                    </Box>
                    <Box>
                        <Typography>
                            I will happy to hear from you. Whether its's a project , website , job opportunity , internship Or just Chat .
                            <br /> Feel free to visit my Contact page or Contact me.
                        </Typography>

                    </Box>
                </Box>
            </Box>

        </Grid>
    )
}

export default About
