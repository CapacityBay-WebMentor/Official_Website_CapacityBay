import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import landing from  '../images/landing_bg.jpg'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { makeStyles, createMuiTheme, ThemeProvider, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import { Typography, Button, withTheme } from "@material-ui/core"
import Paper from '@material-ui/core/Paper'
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin } from "gsap/all";
import { useState} from 'react'
import Home2 from '../components/section-2'
import '../components/layout.css'

const useStyles = makeStyles({
  root:{
    border: 0,
    borderRadius: 22,
    marginLeft: 140,
    marginTop: 520,
    color: 'white',
    padding: '10px 60px',
    background: 'linear-gradient(45deg, #042d73, #04befe)',
    "@media (max-width: 600px)": {
      marginTop: 225,
      marginLeft: 85,
    }
  }
}) 

function BtnStyled(){
  const classes = useStyles()
  return <Button className={classes.root}>My button test</Button>
}

// const theme = createMuiTheme();
// theme = responsiveFontSizes(theme);
const IndexPage = () => {

  const [loading, setLoading] = useState(false)

  // useEffect(()=>{
  //     setLoading(true)
  //     setTimeout(()=>{
  //       setLoading(false)
  //     }, 8000)
  // })
      {

       return (
        
        <Layout> 
        <div className="sticky-nav">
        
        </div> 
          <SEO title="Home" />
          <div>
            <Grid container className="landing">
              <Grid item className="try">
                  <img src={landing} />       
                  <Typography
                  variant= "h1"
                  >Start your application</Typography>
                  <p>Apply to college for the first time or transfer <br />to complete your degree. Navigate your entire<br /> college application journey with Common App</p>    
                  <BtnStyled />
              </Grid>
            </Grid>
          </div>   
          <Home2 />
        </Layout>
    
        )
      }
  }
export default IndexPage