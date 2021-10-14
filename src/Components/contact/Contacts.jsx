import { Box, Grid, makeStyles, Button, Typography, TextField } from '@material-ui/core'
import { React, useState } from 'react'
import { FaMobileAlt, FaEnvelope } from 'react-icons/fa'
import axios from "axios";
const useStyle = makeStyles(theme => ({
    grid: {
        // background: '#0a0a0a',
        // background: '#171717',
        background: '#000029',
        width: 'auto',
        height: '100%',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contactInfo: {
        display: 'flex',
        alignItmes: 'center',
        justifyContent: 'center',

        [theme.breakpoints.down('xs')]: {
            display: 'flow-root'
        },
    },
    contactBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // background: '#151414',
        background: 'rgb(0 0 0 / 26%)',
        padding: '3rem 80px',
        margin: '1rem',
        color: 'white',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            padding: '3rem 63px',
        },
        '& > *': {
            fontSize: 'inherit',
            fontFamily: 'Play'
        },
    },
    contact: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 'auto'
    },
    contactForm: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // margin: '1rem',
        // background: '#151414',
        background: 'rgb(0 0 0 / 26%)',
        color: 'white',
        // [theme.breakpoints.down('sm')]: {
        //     margin: '1rem'
        // },
        // [theme.breakpoints.down('xs')]: {
        //     margin: '1rem'
        // },
    },
    root: {
        '& > *': {
            color: 'white',
            margin: '10px'
        }
    },
    heading: {
        '& > *': {
            fontSize: '21px',
            fontFamily: 'Play',
            padding: '5px',
            margin: '1rem',
            color: 'white',
            [theme.breakpoints.down('sm')]: {
                fontSize: 'large'
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: 'large'
            },
        }
    },
    textField: {
        margin: 8,
        width: '40rem',
        [theme.breakpoints.down('lg')]: {
            width: '40rem',
        },
        [theme.breakpoints.down('md')]: {
            width: '40rem',
        },
        [theme.breakpoints.down('sm')]: {
            width: '30rem',
        },
        [theme.breakpoints.down('xs')]: {
            width: '20rem',
        },
        '& > *': {
            color: 'white',
            fontFamily: 'Play',
        }
    },
    buttons: {
        '& > *': {
            background: '#171414',
            color: '#fffcfc',
            margin: 'inherit',
            fontFamily: 'Play',
            border: '1px solid white'
        }
    }
}))
const Contacts = () => {
    // let link = action = "https://formspree.io/f/mayapyda"
    const classes = useStyle()
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
        }
    };
    // const handleOnSubmit = e => {
    //     e.preventDefault();
    //     const form = e.target;
    //     setServerState({ submitting: true });
    //     axios({
    //         method: "post",
    //         url: "https://formspree.io/mayapyda",
    //         data: new FormData(form)
    //     })
    //         .then(r => {
    //             handleServerResponse(true, "Thanks! for getting touch with me", form);
    //         })
    //         .catch(r => {
    //             handleServerResponse(false, r.response.data.error, form);
    //         });
    // };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        try {
            await axios({
                method: "post",
                url: "https://formspree.io/mayapyda",
                data: new FormData(form)
            })
            await handleServerResponse(true, "Thanks! for getting touch with me", form);

        } catch (error) {
            handleServerResponse(false, error.response.data.error, form);
        }
    };

    return (
        <Grid container className={classes.grid} style={{ margin: 'auto' }}  >
            <Box className={classes.heading} style={{ margin: '0px', boxShadow: '0px 1px 0px 0px #1515ea' }}>
                <Typography style={{ margin: '0px' }} >Get in Touch with us !</Typography>
            </Box>
            <Box className={classes.contact}>
                <Box className={classes.contactInfo}>

                    <Box className={classes.contactBox} >
                        <Box style={{ textAlign: 'center' }}>
                            <FaMobileAlt size="4rem" color="#ffa500" />
                        </Box>
                        <Typography>Phone : 9607061247</Typography>
                    </Box>
                    <hr style={{ color: 'white' }} />
                    <Box className={classes.contactBox} >
                        <Box style={{ textAlign: 'center' }}>
                            <FaEnvelope size="4rem" color="#ffa500" />
                        </Box>
                        <Typography>Email : anikerandhave@gmail.com</Typography>
                    </Box>

                </Box>

                <Grid container item lg={12} md={12} sm={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
                    <Box className={classes.contactForm}>
                        <Box className={classes.heading}>
                            <Typography>Please do not hesitate to send me a message</Typography>

                        </Box>
                        <Box className={classes.form}>
                            <form onSubmit={handleOnSubmit} className={classes.root} noValidate autoComplete="off">
                                <Box>
                                    <TextField id="standard-full-width"
                                        className={classes.textField}
                                        margin="normal"
                                        label="Name"
                                        name="name"
                                        type="text"
                                        required
                                        variant="filled"

                                    />
                                </Box>
                                <Box>
                                    <TextField className={classes.textField}
                                        margin="normal"
                                        label="Email"
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        variant="filled"

                                    />
                                </Box>
                                <Box>
                                    <TextField className={classes.textField}
                                        margin="normal"
                                        label="Message"
                                        type="text"
                                        name="message"
                                        required
                                        variant="filled"

                                    />
                                </Box>

                                <Box className={classes.buttons}>
                                    <Button color="primary" type="submit" disabled={serverState.submitting} >Submit</Button>
                                    <Button color="primary" type="reset" >Reset</Button>
                                </Box>
                                {serverState.status && (
                                    <p style={{ fontFamily: 'Play', textAlign: 'center', color: 'orange', fontSize: 'large' }} className={!serverState.status.ok ? "errorMsg" : ""}>
                                        {serverState.status.msg}
                                    </p>
                                )}
                            </form>
                        </Box>
                    </Box>
                </Grid>

            </Box>
        </Grid>
    )
}

export default Contacts
