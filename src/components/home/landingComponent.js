import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles, createMuiTheme, ThemeProvider, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'
import { Button, withTheme, IconButton } from "@material-ui/core"
import Paper from '@material-ui/core/Paper'
import {useState, useEffect} from 'react'
//import { Splide, SplideSlide } from '@splidejs/react-splide';
import './landing.css'
import { Typography } from '@material-ui/core'
import { StaticImage } from 'gatsby-plugin-image'
import landing from '../../images/landing_bg.jpg'



const useStyles= makeStyles((theme)=>({
    gridCont:{    
        minHeight: '700px',
        width: '100%',
        [theme.breakpoints.down('md')]:{
            width: '100%',
        },   
    },
    heading:{
        fontSize: '3em',
        color: 'white',
        fontWeight: '700',
        maxWidth: '500px',
        [theme.breakpoints.down('md')]:{
            fontSize: '1rem',
            marginTop: '70px',
            width: '300px',
        },
        [theme.breakpoints.up('md')]:{
            fontSize: '2rem',
            marginTop: '70px',
            width: '700px',
        },
        [theme.breakpoints.down('sm')]:{
            fontSize: '1.5rem',
            paddingLeft: '20px'
        }
    },
    h3: {
        color: '#af221f',
        fontSize: '1.5rem',
        paddingLeft: '105px',
        marginTop: '11px',
        [theme.breakpoints.down('md')]:{
            paddingLeft: '20px',
        }
    },
    landingImg:{
        position: 'absolute',
        top: 0,
        width: '100%',
        heigth: '100%',
        zIndex: 3000,
    }
}))

const LandingComponent = ({location})=>{
    const slides = [{first: "Welcome To The Workforce Development Exchange", second: "For US Veterance", id: 1}]
    
    const [seconds, setSeconds] = useState(0);
    

    const classes = useStyles()    
    return( 
            <Grid container className={classes.gridCont}> 
                <Grid item md={12}>   
                    <StaticImage src={ landing } className={classes.landingImg} alt="A picture of a black girl sitting"/>
                </Grid>
             </Grid>
    )
}


export default LandingComponent
