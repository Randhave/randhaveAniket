import { Grid, makeStyles, Box, Link, Typography } from '@material-ui/core'
import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyle = makeStyles(theme => ({
    grid: {
        margin: 'auto',
        background: '#000029',
    },
    div1: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        padding: '1rem',

    },
    icons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& > *': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '1rem',
            '& :hover': {
                cursor: 'pointer'
            }
        }
    },
    content: {
        '& > *': {
            fontSize: '14px',
            fontFamily: 'Play',
            color: 'white',
            textAlign: 'center'
        }

    }
}))
const Footer = () => {
    const classes = useStyle()

    let year = new Date().getFullYear()

    return (

        <Grid container id="footer" item className={classes.grid} lg={12} md={12} sm={12} xm={12}>
            <Box className={classes.div1}>

                <Box className={classes.icons}>

                    <Box >
                        <Link href="https://github.com/Randhave" target="_blank" >
                            <GitHubIcon style={{ fontSize: 30 }} />
                        </Link>
                    </Box>
                    <Box>
                        <Link href="https://www.linkedin.com/company/login/">
                            <LinkedInIcon style={{ fontSize: 30 }} color="primary" target="_blank" />
                        </Link>

                    </Box>
                    <Box>
                        <Link href="https://www.instagram.com/accounts/onetap/?next=%2F">
                            <InstagramIcon style={{ fontSize: 30 }} color="secondary" target="_blank" />
                        </Link>

                    </Box>
                    <Box>
                        <Link href="https://www.facebook.com/aniket.randhave.52/">
                            <FacebookIcon style={{ fontSize: 30 }} color="primary" target="_blank" />
                        </Link>

                    </Box>

                </Box>
                <Box className={classes.content}>
                    <Typography >
                        | &#169; Made By | &#10084; Aniket Randhave &#10084; | Web Developer | {year} |
                    </Typography>
                </Box>

            </Box>
        </Grid>

    )
}

export default Footer
