import React from 'react'
import reg from '../../components/Registration/reg.css'
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles'
import { Typography, responsiveFontSizes, createMuiTheme, ThemeProvider, MuiThemeProvider  } from '@material-ui/core';
import { colors, Grow, useMediaQuery, useTheme} from "@material-ui/core"
import { Link } from "gatsby"
import back from '../../images/arrow-back.png'
import { withArtDirection } from 'gatsby-plugin-image';
import Layout from "../../components/layout"

const useStyles= makeStyles((theme)=>({
    formc:{
        width: '80%',
        height: '400px',
        [theme.breakpoints.down('md')]:{
            width: '100%',
        }
    }
}))


function Intro() {
    const classes = useStyles()

    return (
        <Layout>
            <div className="reg-wrapper">
                <Grid container>
                    <Grid item xs={12} className="go-back-link"><Link to="/register" className="link-back">Back<img src={back} /></Link></Grid>
                    <Grid item xs={12} className="text-container">
                        <h2>CapacityBay Partner Registration</h2>
                        <p>Step: 1 General Information</p>
                    </Grid>
                    <Grid item md={12} className={classes.formc}>
                        <div className="realCont first">
                        
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Layout>
    )
}

export default Intro
