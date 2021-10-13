import { Box, Button, Card, Grid, Link, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

import { projectData } from '../../constants/projectData'


const useStyle = makeStyles(theme => ({
    serviceHeading: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 'auto',
        padding: '1rem',
        '& > *': {
            color: 'white',
            fontFamily: 'Play',
            boxShadow: '0px 1px 0px 0px #1515ea',
            fontSize: 'x-large',
            padding: '5px',
        },

    },
    grid: {
        width: 'auto',
        // height: '100vh',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 0rem',
        // background: '#171717',
        background: '#000029',

    },
    card: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgrouond: 'rgb(33 33 33)',
        boxShadow: '0px 1px 4px 0px whitesmoke'
    },
    language: {
        padding: '1rem',
        [theme.breakpoints.down('xs')]: {
            padding: '5px' ,
            margin:'10px 0px'
        },
        '& > *': {
            textAlign:'center',
            fontSize: 'larger',
            textTransform: 'uppercase',
            // boxShadow: '0px 2px 0px 0px #e0e0e0',
            color: 'white',
        }
    },
    image: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        margin: '12px',
        boxShadow: '0px 0px 3px 0px white',
        backgrouond: 'black',
        '& > *': {
            color: '#009e00',
            textDecoration: 'none',
        }
    },
    div1: {
        margin: '0px 149px',

        [theme.breakpoints.down('md')]: {
            margin: '1rem 90px'
        },
        [theme.breakpoints.down('sm')]: {
            margin: '0px'
        },
        [theme.breakpoints.down('xs')]: {
            margin: '0px'
        },

    },
    div2: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto'
    }
}))
const Work = () => {
    const classes = useStyle()

    return (
        <Grid container items lg={12} md={12} sm={12} xs={12} className={classes.grid}>
            <Box className={classes.div1}>
                <Box className={classes.serviceHeading}>
                    <Typography>Work i have tried</Typography>
                </Box>
                <Grid container item lg={12} md={12} sm={12} xm={12} className={classes.div2}>

                    {
                        projectData.map(project => (
                            <>
                                <Grid item lg={4} md={3} sm={6} xs={6} >
                                    <Card style={{ background: 'rgb(0 0 0 / 26%)', margin: '1rem', width: 'auto', height: 'auto' }}>
                                        <Box className={classes.card}>
                                            <Box className={classes.language}>
                                                <Typography>{project.language}</Typography>
                                            </Box>
                                            <Link href={project.link} target="_blank">
                                                <Box className={classes.image}>
                                                    <img src={project.url} alt="images" loading="lazy" style={{ width: '100%', height: '15vh' }} />
                                                </Box>
                                            </Link>
                                            <Box className={classes.language} style={{ marginTop: '0px' , textAlign:'center' }} >
                                                <Typography>{project.title}</Typography>
                                            </Box>
                                            <Box className={classes.btn}>
                                                <Link href={project.link} target="_blank">
                                                    <Button>View Project</Button>
                                                </Link>
                                            </Box>
                                        </Box>
                                    </Card>
                                </Grid>
                            </>
                        ))
                    }

                </Grid>
            </Box>
        </Grid>
    )
}

export default Work
