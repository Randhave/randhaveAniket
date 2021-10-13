import React from 'react'
import { Grid, Box, Card, makeStyles, Typography } from '@material-ui/core'
import { serviceData } from '../../constants/projectData'

const useStyle = makeStyles({
    grid: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        // background: '#0a0a0a',
        // height:'100vh',
        width: '100%',
        // background: '#171717',
        background: '#000029',

    },
    serviceHeading: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 'auto',
        padding: '1rem',
        '& > *': {
            color: 'white'
        },
        '& :first-child': {
            boxShadow: '0px 1px 0px 0px #1515ea',
            fontSize: 'x-large',
            color: 'white',
            // padding: '5px',
            fontFamily: 'Play',

        },
        '& :last-child': {
            color: '#a4a4d6',
            fontSize: '14px',
            paddingTop: '5px',
            fontFamily: 'Play',
            fontWeight: '400px',
            boxShadow: '0px 1px 0px 0px white',
            paddingBottom: '5px'
        }
    },
    cardDiv: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto'
    },
    card: {
        textAlign: 'center',
        margin: '1rem',
        padding: '1rem',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        //   background:'rgb(0 0 0 / 26%)',
        background: 'rgb(0 0 0 / 26%)',
        boxShadow: '0px 2px 0px 0px whitesmoke',
        transition: '0.3s',
        color: 'white',
        '&:hover': {
            boxShadow: '2px 7px 11px 1px grey',
            TransformStream: 'trnaslate(-25px)',
            TransformStream: 'Scale(2rem)'
        }
    },
    heading: {
        fontFamily: '-webkit-pictograph',
        fontSize: '22px',
        margin: '5px',
        padding: '5px',
        boxShadow: '0px 1px 0px 0px #1515ea',
        fontWeight: 'bold'
    },
    info: {
        '& > *': {
            fontSize: '14px',
            fontFamily: 'system-ui'
        }
    },
    grid_second: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    }
})
const Services = () => {
    const classes = useStyle()
    return (
        <Grid container item className={classes.grid}>

            <Box className={classes.cardDiv} >
                <Box className={classes.serviceHeading}>
                    <Typography>My Services</Typography>
                    <Typography> What i provide  </Typography>
                </Box>


                <Box style={{ display: 'flex' }}>
                    <Grid container item lg={12} md={12} sm={12} xm={12} className={classes.grid_second}>
                        {
                            serviceData.map((data => (
                                <>
                                    <Grid item lg={3} md={3} sm={6} xs={12} className={classes.grid_second}>
                                        <Card className={classes.card}>
                                            <Typography><span> {data.icon} </span></Typography>
                                            <Typography className={classes.heading}> {data.heading} </Typography>
                                            <Box className={classes.info}>
                                                <Typography> {data.info} </Typography>
                                            </Box>
                                        </Card>
                                    </Grid>
                                </>
                            )))
                        }
                    </Grid>
                </Box>

            </Box>
        </Grid>
    )
}

export default Services




{/* <Card className={classes.card}>
                        <Typography><span> <MdPhonelink style={{ fontSize: '4rem', color: 'rgb(160 160 255)' }} /> </span></Typography>
                        <Typography className={classes.heading}>Responsive</Typography>
                        <Box className={classes.info}>
                            <Typography>I can devlopes webiste which will be occcurately in the Laptops as well as Android Mobiles etc ..</Typography>
                        </Box>
                    </Card>
                    <Card className={classes.card}>
                        <Typography><span> <FaCode style={{ fontSize: '4rem', color: 'rgb(160 160 255)' }} /> </span></Typography>
                        <Typography className={classes.heading}>Clean Code</Typography>
                        <Box className={classes.info}>
                            <Typography>I can write clean code in the give Languages mentioned in skills sections</Typography>

                        </Box>
                    </Card> */}