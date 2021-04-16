import * as React from "react"
import PropTypes, { objectOf } from "prop-types"
import { Link } from "gatsby"
import './nav.css'
import '../Layout.css'
import logo from '../../images/logo.svg'
import { colors } from "@material-ui/core";
import { useState, useEffect } from 'react'
import { fade, makeStyles, useStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/icons/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { red } from "@material-ui/core/colors"

<<<<<<< HEAD
// const setNav = ()=>{
//   if(document.documentElement.scrollTop >= 70){
//     // alert('reached 50')
//   }
// }
// window.addEventListener('scroll', setNav)
const Header = ({ siteTitle }) => {
  const [nav, setNav]  = useState(false)
  const useStyles = makeStyles({
    header: {
      backgroundColor: "transparent",
      color: "white",
      boxShadow: "0 0 0 0"
    }
  })
  const classes = useStyles()
=======
const setNav = ()=>{
  window.addEventListener('scroll', setNav)
  if(document.documentElement.scrollTop >= 70){
    // alert('reached 50')
  }
}


const Header = ({ siteTitle }) => {

>>>>>>> master
 return(
  <header>
      <AppBar position="sticky" className={classes.header}>
        <Toolbar>
        <IconButton aria-label="app" color="inherent">
        <Menu style={{color: 'white'}}/>
        </IconButton>
        <Typography variant="h6">Capacity</Typography>
        </Toolbar>
      </AppBar>
  </header>
)
 }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
