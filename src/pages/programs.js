import React from 'react'
import PropTypes from 'prop-types'
import Layout from "../components/layout"
import "../components/main.css"
import SEO from "../components/seo"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Programs from '../components/programs'

const useStyles = makeStyles((theme)=>({
    paperplay:{
        padding: 20,
        height: 500,
        position: 'relative',
        backgroundColor: 'red',
    },
    car:{
        position: 'absolute',
        top: 0,
    },
    body:{
        backgroundColor: 'red',
    }
}))

const Page2 = (props)=>{
    const classes = useStyles()
    return (
        <>
           <Layout>
           <Programs />        
           </Layout> 
        </>
    )
}

Page2.propTypes = {

}

export default Page2

