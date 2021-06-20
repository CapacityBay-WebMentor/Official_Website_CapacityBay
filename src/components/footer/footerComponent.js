import React from 'react'
import './footer.css'
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import byc from '../../images/icons/byc.svg'
import { motion } from "framer-motion"
import { colors, Grow, useMediaQuery, useTheme, theme } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EmailIcon from '@material-ui/icons/Email';
import BusinessIcon from '@material-ui/icons/Business';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import ReportIcon from '@material-ui/icons/Report';
import RoomServiceIcon from '@material-ui/icons/RoomService';

const useStyles= makeStyles((theme)=>({
    byc:{
        position: 'absolute',
        bottom: 5,
        left: 100,
        zIndex: 20,
        width: 130,
    },
    listgridColor:{
        listStyle: 'none'
    },
    fgrid:{
        width: '100px',
        textAlign: 'center',
        padding: '20px',
    },
    footItem: {
        width: '100%',
        maxWidth: 360,
      },
      footItemLast:{
          display: 'flex',
          justifyContent: 'space-between',
          [theme.breakpoints.down('md')]:{
              flexDirection: 'column',
          }        
      }
}))
const Footer = ()=>{
    const classes = useStyles()
    return(
        <>
            <div className="footer">            
                <div className="wrapFooter">
                    <Grid container className="topLine">
                        <Grid item md={4} xs={10} className={classes.fgrid}>  
                        <div className="footerCont">
                            <div className="con1">
                            <h3>Get involved</h3>
                            <p>If you're interested in being a part of our movement for change, please do not hesitate. Our team is filled of many dedicated individuals, but we're always looking for more help. We strongly believe that many hands makes work lighter, and we're hoping for as many helping hands as possible.</p>
                            <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            </ul>
                            </div>
                        
                        </div> 
                        </Grid>

                        <Grid item md={4} xs={12} className={classes.fgrid}>   
                        <div className="con1">
                            <h3>Quick links</h3>
                            
                            <List component="nav" className={classes.footItem} aria-label="contacts">
                                <ListItem button>
                                    <ListItemIcon>
                                        <BusinessIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="9701 Apollo Drive suite 301 Largo MD 20774" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <EmailIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="info@capacitybay.org" />
                                </ListItem>
                            </List>
                        </div>                 
                        </Grid>

                        <Grid item md={4} xs={12} className={classes.fgrid}>  
                           
                            <List component="nav" className={classes.footItemLast} aria-label="contacts">
                                <div className="set1">
                                <h3>Contact</h3> 
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
                                <div className="set2">                                 
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
                <div className="bottomLine">
                    <ul className="flexedBottom">
                        <li>Terms of use</li>
                        <li>License agreement</li>
                        <li>Privacy policy</li>
                        <li>Application affirmation</li>
                    </ul>

                </div>
            </div>
        
        </>
    )
}


export default Footer 