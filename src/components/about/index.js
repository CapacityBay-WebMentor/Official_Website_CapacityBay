import React from 'react'
import './about.css'
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles'
import { Typography, responsiveFontSizes, createMuiTheme, ThemeProvider, MuiThemeProvider  } from '@material-ui/core';
import byc from '../../images/icons/byc.svg'
import { colors, Grow, useMediaQuery, useTheme} from "@material-ui/core"
import manBall from  '../../images/manBall.svg'
import buildSon from  '../../images/buildSon.svg'
import { red } from '@material-ui/core/colors';



let theme = createMuiTheme()
theme = responsiveFontSizes(theme);

const useStyles= makeStyles(()=>({

    TypographyText:{
        color: 'black',
        fontWeight: 500,
        fontFamily:['-appleMacSystemFont','sans-serif'].join(','),
        paddingBottom: 40,
        fontSize: '2rem',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        top: '190px',
        left: '40%',
        [theme.breakpoints.down('md')]:{
            fontSize: '1.5rem',
            position: 'absolute',
            top: '65px',
            right: '0',
            fontWeight: 700,
        }
    },

    h3:{
        fontSize: '2rem',
        [theme.breakpoints.down('xs')]:{
            fontSize: '1.5rem',
        }
    },
    stickyIcons:{
        height: '200px',
        width:'40px',
        position: 'fixed',
        right: '0',
        top: '150px',
        height: '200px',
        backgroundColor: 'green',
    }
}))
const AbTop = ({location})=>{
    const classes = useStyles()    
    return( 
            <Grid container className="gridCont">
                <div className={classes.stickyIcons}></div>
                <Grid item className="gridItem" xs={12}>
                    <MuiThemeProvider theme={theme}>            
                    <Typography variant="h1" gutterBottom className={classes.TypographyText}>About CapacityBay Inc</Typography>                  
                    </MuiThemeProvider>
                </Grid>
                <Grid item className="itemLower h" sm={6} xs={6}>
                    <img src={manBall}/>
                </Grid>    
                <Grid item className="itemLower2 h" sm={6} xs={6}>
                    <img src={buildSon}/>
                </Grid>   
                
                <Grid item className="itemText" md={12} xs={12}>
                    <MuiThemeProvider theme={theme}>            
                    <Typography variant="body" gutterBottom className={classes.textBody}>Welcome to Capacity Bay, Inc., the practical and hands-on eLearning platform and organization established to revolutionize learning and workforce development training for U. S. Veterans, transitioning service members, New Americans, immigrants, refugees as well as others in areas of substantial unemployment and technology deprived communities such as sub-Sahara Africa and other parts of the world. We also provide integrated IT consulting services for individuals, businesses and government agencies.</Typography>                 
                    </MuiThemeProvider>
                </Grid>

                <Grid item className="itemText" md={12} xs={12}>
                    <MuiThemeProvider theme={theme}>            
                    <Typography gutterBottom className={classes.h3}>Our History</Typography>
                    <Typography variant="body" gutterBottom className={classes.textBody}>Capacity Bay, Inc. began in 2014 with the vision of its founder Obi Nwachukwu to empower individuals and communities for in-demand employments by simplifying and making easy how learning online and hands-on in a practical way from the comfort of your home or office can benefit individuals and organizations—maximizing group training, promoting personalized development and more.</Typography>                 
                    <Typography variant="body" gutterBottom className={classes.textBody}>Since its formation, Capacity Bay, Inc. has made meaningful strides as an innovative leader in the areas of information technology training.</Typography>                 

                    </MuiThemeProvider>
                </Grid>

                <Grid item className="itemText itemText2" md={12} xs={12}>
                    <MuiThemeProvider theme={theme}>            
                    <Typography gutterBottom className={classes.h3}>Vision</Typography>
                    <Typography variant="body" gutterBottom className={classes.textBody}>Our vision is not only to create information technology jobs and careers for people in transition and poverty but to facilitate economic and social opportunity for them and their families.</Typography>                 
                    </MuiThemeProvider>
                </Grid>
              
                <Grid item className="itemText" md={12} xs={12}>
                    <MuiThemeProvider theme={theme}>            
                    <Typography gutterBottom className={classes.h3}>Mission</Typography>
                    <Typography variant="body" gutterBottom className={classes.textBody}>The Mission of Capacity Bay, Inc. is simple: build the capacity of U. S. Veterans, transitioning service members, New Americans, immigrants, refugees as well as others living in areas of substantial unemployment and technology deprived communities such as sub-Sahara Africa and other parts of the world.</Typography>                 
                    </MuiThemeProvider>

                    
                </Grid>
                </Grid>
    )
}


export default AbTop