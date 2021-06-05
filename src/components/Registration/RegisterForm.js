import React from 'react'
import reg from './reg.css'
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles'
import { Typography, responsiveFontSizes, createMuiTheme, ThemeProvider, MuiThemeProvider  } from '@material-ui/core';
import { colors, Grow, useMediaQuery, useTheme} from "@material-ui/core"
import { Link } from "gatsby"
import back from '../../images/arrow-back.png'
import NavLogo from '../../images/Capacity-Bay-4-footer.png'

const useStyles= makeStyles((theme)=>({
    formc:{
        width: '80%',
        height: '400px',
        [theme.breakpoints.down('md')]:{
            width: '100%',
        }
    },
    img:{
        width: '140px',
    }
}))


function RegisterForm() {
    const classes = useStyles()

    return (
        <div className="reg-wrapper">
            <Grid container>
                <Grid item xs={12} className="go-back-link"><Link to="/register" className="link-back">Back<img src={back} /></Link></Grid>
                <Grid item xs={12} className="text-container">
                    <img src={NavLogo} alt="" className={classes.img}/>
                </Grid>
                <Grid item md={12} className={classes.formc}>
                    <div className="realCont">
                    <div className="full-col-text">
                        <h2>CapacityBay Partner Registration</h2>
                        <p>Step: 1 General Information</p>
                    </div>
                    <div className="sty-wrapper">
                        <div class="partOne sty">
                            <div className="form-group">
                                
                            </div>
                        </div>
                        <div class="partTwo sty">
                            <h1>the woman</h1>
                        </div>
                    </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default RegisterForm
