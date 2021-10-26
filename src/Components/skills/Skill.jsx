import { Box, makeStyles, Typography, Grid, Card } from '@material-ui/core'
import React from 'react'
import { frontEnd, backEnd, database } from '../../constants/projectData'
import clsx from 'clsx'

const useStyle = makeStyles(theme => ({
    mainDiv: {
        // background: 'rgb(33 33 33)',
        background: 'rgb(0 0 0 / 26%)',
        padding: '1rem 180px',
        [theme.breakpoints.down('lg')]: {
            padding: '1rem 7rem',
        },
        [theme.breakpoints.down('md')]: {
            padding: '10px 184px',
            margin: '31px 15px'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '10px 0px',
            margin: '31px 14px'
        },
        [theme.breakpoints.down('xs')]: {

        },
    },
    grid: {
        width: 'auto',
        // height: '100vh',
        // background: '#171717',
        background: '#000029',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // margin: 'auto' 

        [theme.breakpoints.down('lg')]: {
            margin: '0rem 10rem',
        },
        [theme.breakpoints.down('md')]: {
            margin: 'auto'
        },
        [theme.breakpoints.down('sm')]: {
            margin: 'auto'
        },
        [theme.breakpoints.down('xs')]: {
            margin: 'auto'
        },

    },
    heading: {

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 'auto',
        padding: '1rem',
        '& > *': {
            boxShadow: '0px 1px 0px 0px #1515ea',
            fontSize: 'x-large',
            color: 'white',
            // padding: '5px',
            fontFamily: 'Play',

        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '37px',
            margin: '10px',
            padding: '0rem',
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: '37px',
            margin: '10px',
            padding: '0rem',
        },
    },
    firstDiv: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
            margin: '0rem',
        }
    },

    progressDiv: {
        '& > *': {
            color: 'white',
            padding: '15px',
            fontFamily: 'Play',
            // color:'orange',
            [theme.breakpoints.down('xs')]: {
                padding: '7px'
            },
        }
    },

    box1: {
        [theme.breakpoints.down('lg')]: {
            margin: '0rem 0rem',
           
        },
        [theme.breakpoints.down('md')]: {
            margin: '0rem 0rem',
            
        },
        [theme.breakpoints.down('sm')]: {
            margin: '0rem',
            // padding: '0rem 2rem'
        },
        [theme.breakpoints.down('xs')]: {
            margin: '0rem',
            padding: '0rem 0rem'
        },
    },
    skillDiv: {

        [theme.breakpoints.down('sm')]: {
            // marginLeft: '37px',
            margin: '10px',
            padding: '0rem',
        },
        [theme.breakpoints.down('xs')]: {
            // marginLeft: '37px',
            margin: '10px 0px',
            padding: '0rem',
        },
        '& > *': {
            color: 'white',
            fontFamily: 'Play',
            padding: '1rem',
            textTransform: 'uppercase',
        }
    },
    backEnd: {
        marginRight: '8rem',
        [theme.breakpoints.down('sm')]: {

        },
        [theme.breakpoints.down('xs')]: {

        },
    },
    database: {
        marginRight: '8rem',
        [theme.breakpoints.down('sm')]: {

        },
        [theme.breakpoints.down('xs')]: {

        },
    },


}))
const Skill = () => {
    const classes = useStyle()
    return (
        <>
            <Box className={classes.grid}>
                <Box>
                    <Box className={classes.heading} style={{ textAlign: 'center' }}>
                        <Typography>My skills</Typography>
                    </Box>

                    <Box className={classes.mainDiv} >

                        <Grid container style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'flex-start', margin: '10px 0px' }} >
                            <Box className={classes.skillDiv} style={{ background: 'black', }}>
                                <Typography>Front-End</Typography>
                            </Box>
                            <Box className={classes.box1}>
                                <Grid container container className={clsx(classes.database)} >
                                    {
                                        frontEnd.map(skill => (
                                            <>
                                                <Grid item lg={3} md={3} sm={3} xs={4}  >
                                                    <Card className={classes.progressDiv} style={{ boxShadow: '0px 1px 1px 0px #e0e0e0', background: 'rgb(0 0 0 / 12%)', margin: '5px', textAlign: 'center' }}>
                                                        <Typography> {skill.language} </Typography>
                                                    </Card>
                                                </Grid>
                                            </>
                                        ))
                                    }
                                </Grid>
                            </Box>
                        </Grid>

                        <Grid container style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'flex-start' }} >
                            <Box className={classes.skillDiv} style={{ background: 'black', }}>
                                <Typography style={{ color: 'white', fontFamily: 'Play', padding: '1rem 22px', textTransform: 'uppercase' }}>Back-End</Typography>
                            </Box>
                            <Box className={classes.box1}>
                                <Grid container   >
                                    {
                                        backEnd.map(skill => (
                                            <>
                                                <Grid item lg={3} md={3} sm={3} xs={4}  >
                                                    <Card className={classes.progressDiv} style={{ boxShadow: '0px 1px 1px 0px #e0e0e0', background: 'rgb(0 0 0 / 12%)', margin: '5px', textAlign: 'center' }}>
                                                        <Typography> {skill.language} </Typography>
                                                    </Card>
                                                </Grid>
                                            </>
                                        ))
                                    }
                                </Grid>
                            </Box>
                        </Grid>


                        <Grid container style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'flex-start' }} >
                            <Box className={classes.skillDiv} style={{ background: 'black', }}>
                                <Typography style={{ color: 'white', fontFamily: 'Play', padding: '1rem 21px', textTransform: 'uppercase' }}>Database</Typography>
                            </Box>
                            <Box className={classes.box1}>
                                <Grid container className={clsx(classes.database)}  >
                                    {
                                        database.map(skill => (
                                            <>
                                                <Grid item lg={6} md={6} sm={6} xs={6}  >
                                                    <Card className={classes.progressDiv} style={{ boxShadow: '0px 1px 1px 0px #e0e0e0', background: 'rgb(0 0 0 / 12%)', margin: '5px', textAlign: 'center' }}>
                                                        <Typography > {skill.language} </Typography>
                                                    </Card>
                                                </Grid>
                                            </>
                                        ))
                                    }
                                </Grid>
                            </Box>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Skill
