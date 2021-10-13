import { Box, Grid, makeStyles, LinearProgress, Typography } from '@material-ui/core'
import React from 'react'
import { CircleProgress } from 'react-gradient-progress';
import { FaHtml5, FaCss3, FaJs, FaReact, FaJava, FaNode, FaNodeJs, FaPython } from 'react-icons/fa'
import { DiMongodb } from "react-icons/di"

import { frontEnd, backEnd, database } from '../../constants/projectData'


const useStyle = makeStyles(theme => ({
    gridDiv: {
        width: 'auto',
        height: '100vh',
        position: 'relative',
        margin: 'auto',
        background: '#0a0a0a',
        // padding:'1rem'
    },
    text: {
        boxShadow: '0px 1px 0px 0px #1515ea',
        fontSize: '29px',
        color: 'green',
        padding: '5px',
        fontFamily: 'system-ui',
        transForm: 'scaleX(1.5)',
        textTransform: 'uppercase'
    },
    skillDiv: {
        background: 'rgb(29 27 27 / 87%)',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        margin: 'auto',
    },
    skills: {
        margin: 'auto',
    },
    content: {
        color: 'whitesmoke',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    topicHeading: {
        textTransform: 'uppercase',
        fontSize: '17px',
        fontFamily: 'Play'
    },
    progressDiv: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& > *': {
            margin: '10px',
            color: '#ffffff',
            fontSize: '14px',
            background: '#151414',
            padding: '7px 31px'
        }
    },
    iconDiv: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        '& > *': {
            fontSize: '13px',
            fontFamily: 'Play'
        }
    }

}))
const Skills = () => {
    const classes = useStyle()

    return (
        <Grid container  className={classes.gridDiv}>
            <Box className={classes.skillDiv}>
                <Box className={classes.skills}>
                    <Typography className={classes.text} style={{ color: 'white', fontFamily: 'Play' }}>My skills</Typography>
                </Box>
                <Box className={classes.content}>
                    <Box>
                        <Typography className={classes.topicHeading} >Front-End</Typography>
                    </Box>
                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        {
                            frontEnd.map(skill => (
                                <>
                                    <Grid item lg={6} md={4} sm={2} xs={2}>
                                        <Box className={classes.progressDiv}>
                                            <Box className={classes.iconDiv}>
                                                <span> {skill.icon} </span>
                                                <Typography > {skill.language} </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </>
                            ))
                        }

                    </Box>

                </Box>
                <Box className={classes.content}>
                    <Box style={{ marginRight: 'inherit' }}>
                        <Typography className={classes.topicHeading} >Back-End</Typography>
                    </Box>
                   <Box style={{ display: 'flex', alignItems: 'center' }} >
                        {
                            backEnd.map(skill => (
                                <>
                                    <Box className={classes.progressDiv}>
                                        <Box className={classes.iconDiv}>
                                            <span> {skill.icon} </span>
                                            <Typography>{skill.language}</Typography>
                                        </Box>
                                    </Box>
                                </>
                            ))
                        }
                   </Box>
                </Box>
                <Box className={classes.content}>
                    <Box style={{ marginRight: 'inherit' }}>
                        <Typography className={classes.topicHeading} >Database</Typography>
                    </Box>
                    <Box className={classes.progressDiv}>
                        {
                            database.map(database => (
                                <>
                                    <Box className={classes.iconDiv}>
                                        <span> {database.icon} </span>
                                        <Typography> {database.language} </Typography>
                                    </Box>
                                </>
                            ))
                        }
                    </Box>
                </Box>
            </Box>
        </Grid >
    )
}

export default Skills


    // < Box className = { classes.content } >
    //                 <Box>
    //                     <Typography className={classes.topicHeading} >Front End</Typography>
    //                 </Box>

    //                 <Box className={classes.progressDiv}>
    //                     <CircleProgress className={classes.progress} width={115} percentage={50} strokeWidth={3} secondaryColor="#ffffff" primaryColor={['#00ff00', '#00ff00']} /> 
    //                      <CircleProgress className={classes.progress} width={115} percentage={90} strokeWidth={3} secondaryColor="#ffffff" primaryColor={['#00ff00', '#00ff00']}  />
    //                     <CircleProgress className={classes.progress} width={115} percentage={50} strokeWidth={3} secondaryColor="#ffffff" primaryColor={['#00ff00', '#00ff00']} />
    //                     <CircleProgress className={classes.progress} width={115} percentage={80} strokeWidth={3} secondaryColor="#ffffff" primaryColor={['#00ff00', '#00ff00']}  />
    //                     <CircleProgress className={classes.progress} width={115} percentage={75} strokeWidth={3} secondaryColor="#ffffff" primaryColor={['#00ff00', '#00ff00']}  />
    //                 </Box>
    //             </Box >
    // <Box className={classes.content}>
    //     <Box>
    //         <Typography className={classes.topicHeading} >Back End</Typography>
    //     </Box>

    //     <Box className={classes.progressDiv}>
    //         <CircleProgress className={classes.progress} width={115} percentage={50} strokeWidth={3} secondaryColor="#ffffff" primaryColor={['#00ff00', '#00ff00']} />
    //         <CircleProgress className={classes.progress} width={115} percentage={90} strokeWidth={3} secondaryColor="#ffffff" primaryColor={['#00ff00', '#00ff00']} />
    //         <CircleProgress className={classes.progress} width={115} percentage={50} strokeWidth={3} secondaryColor="#ffffff" primaryColor={['#00ff00', '#00ff00']} />
    //         <CircleProgress className={classes.progress} width={115} percentage={80} strokeWidth={3} secondaryColor="#ffffff" primaryColor={['#00ff00', '#00ff00']} />
    //         <CircleProgress className={classes.progress} width={115} percentage={75} strokeWidth={3} secondaryColor="#ffffff" primaryColor={['#00ff00', '#00ff00']} />
    //     </Box>
    // </Box>