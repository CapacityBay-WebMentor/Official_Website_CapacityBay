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
import landing from '../../../static/landing_bg.jpg'
import Img from "gatsby-image"
import {motion} from 'framer-motion'
import { useStaticQuery, Link } from 'gatsby'



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
      
    }
}))

const LandingComponent = ({location})=>{
   
    const slides = [{first: "Welcome To The Workforce Development Exchange", second: "For US Veterance", id: 1}]
    
    const [seconds, setSeconds] = useState(0);
    

    const classes = useStyles()    
    return( 
            <Grid container> 
                <Grid item>   
                    <StaticImage 
                    layout='fullwidth' 
                    width='100%' 
                    height={800} 
                    src={landing}
                    alt="A picture of a black girl sitting"
                    />
                </Grid>
             </Grid>
    )
}


export default LandingComponent
