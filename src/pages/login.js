import React from 'react'
import reg from '../components/layout'
import Layout from "../components/layout"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'
import { Typography, responsiveFontSizes, createMuiTheme, ThemeProvider, MuiThemeProvider  } from '@material-ui/core';
import { colors, Grow, useMediaQuery, useTheme } from "@material-ui/core"
import { Link } from "gatsby"
import { yellow } from '@material-ui/core/colors';
import back from '../images/arrow-back.png'
import { 
    BsFillPersonFill, 
    BsFillAwardFill,
    BsFillEnvelopeFill,
    BsFillUnlockFill,
    BsFilePost,
    BsHeartFill,
    BsPeopleFill,
    BsGeo,
    BsHouseFill,
    BsGeoAlt,
 } from "react-icons/bs";



const useStyles= makeStyles((theme)=>({
    formCont:{
        width: '80%',
        height: '600px',
        [theme.breakpoints.down('md')]:{
            width: '100%',
        }
    },
    img:{
        width: '200px',
    },

    [theme.breakpoints.down('xs')]:{
      width: '100%',
      backgroundColor: 'blue',
      height: '200px',
    },
    inputWrap:{
        width: '100%',
        height: '45px',
        display: 'flex',
        marginBottom: '15px',
        position: 'relative',
        [theme.breakpoints.down('sm')]:{
            width: '100%',           
        }
    },
 
}))


function Login() {
    const classes = useStyles()

    return (
        <Layout>
            <div className="reg-wrapper">
                <Grid container>
                    <Grid item xs={12} className="go-back-link"><Link to="/register" className="link-back">Back<img src={back} /></Link></Grid>
                    <Grid item xs={12} className="text-container">
                    
                    </Grid>
                    <Grid item md={12} xs={12} className={classes.formCont}>
                        <div className="realContLogin">
                            <div className="contentHead">
                                <h4>Sin in</h4>
                                <p>Welcome back, login to manage account</p>
                            </div>
                                <div className={classes.inputWrap}><span className = "inlineSpan inlineSpan"><BsFillPersonFill className="icon"/></span><input type="text" placeholder="Email Address" className="inputText"/></div>
                                <div className={classes.inputWrap}><span className = "inlineSpan inlineSpan"><BsFillPersonFill className="icon"/></span><input type="text" placeholder="Password" className="inputText"/></div>
                            <div className="threeSets">
                                <button className="accLogin" to="" >Next Step</button>
                                <div class="separator">OR</div>
                                <button className="nextStepLogin" to="/login">Got an Account</button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Layout>
    )
}

export default Login
