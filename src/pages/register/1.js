import React from 'react'
import reg from '../../components/Registration/reg.css'
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { makeStyles } from '@material-ui/core/styles';
import Registeration from '../../components/Registration/RegisterForm'


const useStyles = makeStyles((theme)=>({
 
}))

const RegisterForm = (props)=>{
    
    return (
        <>
           <Layout>
             <Registeration />       
           </Layout> 
        </>
    )
}


export default RegisterForm
