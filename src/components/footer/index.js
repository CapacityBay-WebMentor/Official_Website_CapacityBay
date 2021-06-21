import React from 'react'
import './footer.css'
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import '@fontsource/roboto';
// import { motion } from "framer-motion"
// import { colors, Grow, useMediaQuery, useTheme, theme } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EmailIcon from '@material-ui/icons/Email';
import BusinessIcon from '@material-ui/icons/Business';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons'; import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import ReportIcon from '@material-ui/icons/Report';
import RoomServiceIcon from '@material-ui/icons/RoomService';

const useStyles= makeStyles((theme)=>({

    footerWrapper:{
        width: '100%',
        backgroundColor: '#4a4a4a',
        minHeight: '350px',
        display: 'flex',  
        padding: 10,
    },
    triDiv:{
        width: '80px',
        padding: 10,
        textAlign: 'center',
        color: 'white',
        borderLeft: '2px ridge red',
    },
    [theme.breakpoints.down('xs')]:{
        fontSize: '1rem',
    },
    listWrap:{
        display: 'flex',
        justifyContent: 'space-between',
    },
    [theme.breakpoints.down('md')]:{
        justifyContent: 'space-around',
    }
}))

const Footer = ()=>{
    const classes = useStyles()

    return(
        <div>
            <div className={classes.footerWrapper}>
                <Grid container>
                    <Grid item md={4}  xs={12} className={classes.triDiv}>
                        <Typography variant='h4'>Get involved</Typography>
                        <Typography variant='body1' style={{color:'white'}}>If you're interested in being a part of our movement for change, please do not hesitate. Our team is filled of many dedicated individuals, but we're always looking for more help. We strongly believe that many hands makes work lighter, and we're hoping for as many helping hands as possible.</Typography>
                    </Grid>
                    <Grid item md={4}  xs={12} className={classes.triDiv}>
                        <Typography variant='h4'>Get involved</Typography>
                        
                    </Grid>
                    <Grid item md={4}  xs={12} className={classes.triDiv}>
                            <Typography variant='h4'>Contact</Typography>
                        <List component="nav" className={classes.listWrap} aria-label="contacts">
                            <div className="set1">                        
                                <ListItem button> 
                                    <ListItemIcon>
                                        <ExitToAppIcon />
                                    </ListItemIcon>                   
                                    <ListItemText primary="Login" />
                                </ListItem>
                            
                                <ListItem button>
                                    <ListItemIcon>
                                        <AccessibilityIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Volunteer" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <PermContactCalendarIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Contact Us" />
                                </ListItem>
                            </div>
                            <div className={classes.set2}>                                 
                                <ListItem button>
                                    <ListItemIcon>
                                        <RoomServiceIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Terms of service" />
                                </ListItem>
                            
                                <ListItem button>
                                    <ListItemIcon>
                                        <ReportIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Covid19" />
                                </ListItem>
                            </div>
                    </List>         
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
    export default Footer