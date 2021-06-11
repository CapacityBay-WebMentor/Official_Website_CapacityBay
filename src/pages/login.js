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
        height: '600px',
        [theme.breakpoints.down('md')]:{
            width: '100%',
        }
    },
    img:{
        width: '200px',
    },
    realCont:{
        maxWidth: '25%',
        height: '530px',
        margin: '0 auto',
        backgroundColor: '#f1f5f8',
        borderRadius: '15px',
        padding: '2px 25px'
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
                        <div className={classes.realCont}>
                         
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Layout>
    )
}

export default Login
