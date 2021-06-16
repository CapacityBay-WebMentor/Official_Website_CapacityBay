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
import {useFormik} from 'formik'
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
        padding: '10px 50px',
        [theme.breakpoints.down('xs')]:{
            padding: '10px 20px',
        }
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
//Form field name attributes in an object
const initialValues = {
    initialValues:{
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        phone: '',
        password: '',
        gender: '',
        mstatus: '',
        address: '',
        city: '',
        State: '',
        country: '',
        agree: ''
    },
}

// Validation method from formik
const validate = values => {
    let errors ={}

    if(!values.firstname){
        errors.firstname = 'First name cannot be empty'
    }
    if(!values.lastname){
        errors.lastname = 'Lastname cannot be empty'
    }
    if(!values.username){
        errors.username = 'Username cannot be empty'
    }
    if(!values.email){
        errors.email = 'Email cannot be empty'
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid formart'
    }
    if(!values.phone){
        errors.phone = 'Phone field cannot be empty'
    }
    if(!values.password){
        errors.password = 'Password cannot be empty'
    }
    if(!values.gender){
        errors.gender = 'Gender cannot be empty'
    }
    if(!values.mstatus){
        errors.mstatus = 'Marital status cannot be empty'
    }
    if(!values.address){
        errors.address = 'Address field cannot be empty'
    }
    if(!values.city){
        errors.city = 'City cannot be empty'
    }
    if(!values.state){
        errors.state = 'State cannot be empty'
    }
    if(!values.country){
        errors.country = 'Country cannot be empty'
    }
    if(!values.status){
        errors.status = 'Lastname cannot be empty'
    }
    if(!values.agree){
        errors.agree = 'You must accept terms first'
    }

    return errors
}
const onSubmit = values => {

}
function RegisterForm() {
    const classes = useStyles()
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
   // Console.log('form values: ', formik.values)
   // console.log('form errors: ', formik.errors)
   console.log('Visited fields from onBlur', formik.touched)

    
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

                    <form onSubmit={formik.handleSubmit} className={classes.flexCont}>    
                        <div className={classes.flexCont}>
                                <div className={classes.inputWrap}><span className = "inlineSpan inlineSpan"><BsFillPersonFill className="icon"/></span><input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.firstname} name="firstname" placeholder="First Name" className="inputText error"/>{formik.touched.firstname && formik.errors.firstname ? <div className="errors">{formik.errors.firstname}</div> : null }</div>
                                <div className={classes.inputWrap}><span className = "inlineSpan1 inlineSpan"><BsFillPersonFill className="icon"/></span><input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.lastname} name="lastname" placeholder="Last Name" className="inputText"/>{formik.touched.lastname && formik.errors.lastname ? <div className="errors">{formik.errors.lastname}</div> : null }</div>
                                <div className={classes.inputWrap}><span className = "inlineSpan2 inlineSpan"><BsFillAwardFill className="icon"/></span><input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.username} name="username" placeholder="Username" className="inputText"/>{formik.touched.username && formik.errors.username ? <div className="errors">{formik.errors.username}</div> : null }</div>
                                <div className={classes.inputWrap}><span className = "inlineSpan3 inlineSpan"><BsFillEnvelopeFill className="icon"/></span><input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} name="email" placeholder="Email" className="inputText"/>{formik.touched.email && formik.errors.email ? <div className="errors">{formik.errors.email}</div> : null }</div>
                                <div className={classes.inputWrap}><span className = "inlineSpan4 inlineSpan"><BsFilePost className="icon"/></span><input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} name="phone" placeholder="Phone" className="inputText"/>{formik.touched.phone && formik.errors.phone ? <div className="errors">{formik.errors.phone}</div> : null }</div>
                                <div className={classes.inputWrap}><span className = "inlineSpan5 inlineSpan"><BsFillUnlockFill className="icon"/></span><input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} name="password" placeholder="Password" className="inputText"/>{formik.touched.password && formik.errors.password ? <div className="errors">{formik.errors.password}</div> : null }</div>
                                <div className={classes.inputWrap}><span className = "inlineSpan6 inlineSpan"><BsHeartFill className="icon"/></span><input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.gender} name="gender" placeholder="Gender" className="inputText"/>{formik.touched.gender && formik.errors.gender ? <div className="errors">{formik.errors.gender}</div> : null }</div>
                                <div className={classes.inputWrap}><span className = "inlineSpan7 inlineSpan"><BsPeopleFill className="icon"/></span><input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.mstatus} name="mstatus" placeholder="Marital Status" className="inputText"/>{formik.touched.mstatus && formik.errors.mstatus ? <div className="errors">{formik.errors.mstatus}</div> : null }</div>
                                <div className={classes.inputWrap}><span className = "inlineSpan8 inlineSpan"><BsGeo className="icon"/></span><input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.address} name="address" placeholder="Address" className="inputText"/>{ formik.touched.address &&formik.errors.address ? <div className="errors">{formik.errors.address}</div> : null }</div>
                                <div className={classes.inputWrap}><span className = "inlineSpan9 inlineSpan"><BsHouseFill className="icon"/></span><input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.city} name="city" placeholder="City" className="inputText"/>{formik.touched.city && formik.errors.city ? <div className="errors">{formik.errors.city}</div> : null }</div>
                                <div className={classes.inputWrap}><span className = "inlineSpan10 inlineSpan"><BsGeoAlt className="icon"/></span><input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.state} name="state" placeholder="State" className="inputText"/>{formik.touched.state && formik.errors.state ? <div className="errors">{formik.errors.state}</div> : null }</div>
                                <div className={classes.inputWrap}><span className = "inlineSpan10 inlineSpan"> <BsFillPersonFill className="icon"/></span> <input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.country} name="country" placeholder="Select Country" className="inputText"/>{formik.touched.country && formik.errors.country ? <div className="errors">{formik.errors.country}</div> : null }</div>                           
                        </div>

                        <div className="agree"><input type="checkbox" onChange={formik.handleChange} value={formik.values.country} name="agree" />Agree to <Link>Terms & Conditions</Link></div>
                        <div className="threeSets">
                            <button type="submit" className="buttonr">Next Step</button>
                            <div class="separator">OR</div>
                            <button className="buttonrr" to="/login">Got an Account</button>
                        </div>
                    </form>
            </Grid>
                </Grid>
 
            </Grid>
                <div className={classes.divide50}></div>
        </div>
    )
}

export default RegisterForm
