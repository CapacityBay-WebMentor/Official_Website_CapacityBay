import React from 'react'
import reg from './reg.css'
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles'
import { Typography, responsiveFontSizes, createMuiTheme, ThemeProvider, MuiThemeProvider  } from '@material-ui/core';
import { colors, Grow, useMediaQuery, useTheme} from "@material-ui/core"
import { Link } from "gatsby"
import back from '../../images/arrow-back.png'
import NavLogo from '../../images/Capacity-Bay-4-footer.png'
import { red } from '@material-ui/core/colors';
//import { faSearch } from "react-icons/faSearch";
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
    formc:{
        width: '80%',
        height: '400px',
        [theme.breakpoints.down('md')]:{
            width: '100%',
        }
    },
    img:{
        width: '140px',
    },
    formCont:{
        maxWidth: '800px',
        margin: '0 auto',
    },
    formContainer:{
        maxWidth: '800px',
        backgroundColor: '#dee9f9',
        paddingTop: '30px',
        borderRadius: '15px',
        transform: 'translateY(10px)',
        [theme.breakpoints.down('sm')]:{
            maxWidth: '90%',
            borderRadius: '0',
            margin: '0 auto'
        }
    },
    flexCont:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: '40px',
        marginTop: '20px',
        padding: '0 50px',
    },
    inputWrap:{
        width: 'calc(100%/2 - 20px)',
        height: '45px',
        display: 'flex',
        marginBottom: '15px',
        position: 'relative',
        [theme.breakpoints.down('sm')]:{
            width: '100%',           
        }
    },
    myP:{
        textAlign: 'center',
    },
    divide50:{
        width: '100%',
        height: '50px',
    },
    [theme.breakpoints.down('xs')]:{
        width: '100%',
        height: '150px',
    }
}))


function RegisterForm() {
    const classes = useStyles()

    return (
        <div className="reg-wrapper">
            <Grid container className="clean">
                <Grid item xs={12} className="go-back-link"><Link to="/register" className="link-back">Back<img src={back} /></Link></Grid>
                <Grid item xs={12} className="text-container">
                    <img src={NavLogo} alt="" className={classes.img}/>
                </Grid>
                <Grid item xs={12} className={classes.formCont}>
                    <Grid item xs={12} className={classes.formContainer}>
                        <div className="top">                   
                            <h3 className={classes.myP}>CapacityBay Growth Partners Registration</h3>
                            <p className={classes.myP}>Step 1: General information</p>
                        </div>

                        
                        <div className={classes.flexCont}>
                            <div className={classes.inputWrap}><span className = "inlineSpan inlineSpan"><BsFillPersonFill className="icon"/></span><input type="text" placeholder="First Name" className="inputText"/></div>
                            <div className={classes.inputWrap}><span className = "inlineSpan1 inlineSpan"><BsFillPersonFill className="icon"/></span><input type="text" placeholder="Last Name" className="inputText"/></div>
                            <div className={classes.inputWrap}><span className = "inlineSpan2 inlineSpan"><BsFillAwardFill className="icon"/></span><input type="text" placeholder="Username" className="inputText"/></div>
                            <div className={classes.inputWrap}><span className = "inlineSpan3 inlineSpan"><BsFillEnvelopeFill className="icon"/></span><input type="text" placeholder="Email" className="inputText"/></div>
                            <div className={classes.inputWrap}><span className = "inlineSpan4 inlineSpan"><BsFilePost className="icon"/></span><input type="text" placeholder="Phone" className="inputText"/></div>
                            <div className={classes.inputWrap}><span className = "inlineSpan5 inlineSpan"><BsFillUnlockFill className="icon"/></span><input type="text" placeholder="Password" className="inputText"/></div>
                            <div className={classes.inputWrap}><span className = "inlineSpan6 inlineSpan"><BsHeartFill className="icon"/></span><input type="text" placeholder="Gender" className="inputText"/></div>
                            <div className={classes.inputWrap}><span className = "inlineSpan7 inlineSpan"><BsPeopleFill className="icon"/></span><input type="text" placeholder="Marital Status" className="inputText"/></div>
                            <div className={classes.inputWrap}><span className = "inlineSpan8 inlineSpan"><BsGeo className="icon"/></span><input type="text" placeholder="Address" className="inputText"/></div>
                            <div className={classes.inputWrap}><span className = "inlineSpan9 inlineSpan"><BsHouseFill className="icon"/></span><input type="text" placeholder="City" className="inputText"/></div>
                            <div className={classes.inputWrap}><span className = "inlineSpan10 inlineSpan"><BsGeoAlt className="icon"/></span><input type="text" placeholder="State" className="inputText"/></div>
                            <div className={classes.inputWrap}><span className = "inlineSpan10 inlineSpan"> <BsFillPersonFill className="icon"/></span> <input type="text" placeholder="Select Country" className="inputText"/></div>
                        
                        </div>

                        <div className="agree"><input type="checkbox" />Agree to <Link>Terms & Conditions</Link></div>
                        <div className="threeSets">
                            <button to="">Next Step</button>
                            <div class="separator">OR</div>
                            <button to="/login">Got an Account</button>
                        </div>
                    </Grid>
                </Grid>
 
            </Grid>
            <div className={classes.divide50}></div>
        </div>
    )
}

export default RegisterForm
