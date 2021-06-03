import React from 'react'
import './contact.css'
import { faAngleDown, faComments, faPhone, faPhoneAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';



function Contacts() {
    return (
        <>
        <div className="wrapper">
                <div className="bg">
                    <div className="gb-text">
                    <h1>Get in Touch</h1>
                    <p>Want to get in touch? We'd love to hear from you. Here is how you can reach us.</p>
                    </div>
                </div>
                <div className="box-con">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="box">
                                <div className="box-text">
                                    <FontAwesomeIcon icon={faPhoneAlt} style={{ fontSize: '2rem' }}/>
                                    <h4>Talk to Sales</h4>
                                    <p className="inter">Interested in CapacityBay Courses? Just pick up the phone to chat with a memeber of our sales team.</p>
                                    <span className="tel"><a href="tel:+1 (301) 332-4407">+1 (301) 332-4407</a></span>
                                    <p><a className="view" href="#">View all global numbers</a></p>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                    </div>
                                </div>
                            </div>
                        <div className="col-sm-6">
                            <div className="box">
                                <div className="box-text2">
                                <FontAwesomeIcon icon={faComments} style={{ fontSize: '2rem' }} />
                                    <h4>Contact Customer Support</h4>
                                    <p className="inter2">Sometimes you need a little help from your friends, Or a CapacityBay support rep. Don't worry we're here for you.</p>
                                    <a href="#" className="support" >Contact Support</a>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

Contacts.propTypes = {

}

export default Contacts