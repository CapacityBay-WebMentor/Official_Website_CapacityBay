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



const useStyles= makeStyles((theme)=>({
    formCont:{
        width: '80%',
        height: '400px',
        [theme.breakpoints.down('md')]:{
            width: '100%',
        }
    },
    img:{
        width: '200px',
    }
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
                    <Grid item md={12} className={classes.formCont}>
                        <div className="realCont first">
                            <div className="top">
                              <h4>Welcome to CapacityBay Registration</h4>
                              <p>Step 0: Welcome</p>
                              <div className="getStarted">
                                <p>Welcome to your growth space. Signing up with us is a declaration of your desire to grow your finance and your dreams this year and beyond even as we grow our businesses and brands. This new partnership opens a door to quick, easy and secure investment for you. Welcome</p>
                              </div>
                              <div class="button-group">
                                <Link to="/register/one" className="getSt sty">GET STARTED<span></span></Link>
                                    <div class="separator">OR</div>
                                <Link to="#" className="acc sty">GOT AN ACCOUNT<span></span></Link>
                              </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Layout>
    )
}

export default Login
