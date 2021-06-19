import React from 'react'
import './programs.css'
import splunk from "../../images/splunks.jpg"
import learn from "../../images/learning.jpg"
import css from "../../images/CSS.jpg"
import js from "../../images/JS.jpg"
import linux from "../../images/linuxx.jpeg"




function Programs() {
    return (
        <>
        <div className="wrapper">
        <div class="lamb">
                <div class="lamb-text">
                  <h1>Support for all students</h1>
                  <p>
                    As a recommender, you need to support a diverse range of
                    students and families. CapacityBay for recommenders offers a
                    simple way to manage your workflow and help your students
                    soar.
                  </p>
                  <h1>Courses</h1>
                </div>
              </div>
              <div class="course-con">
                <div class="hamburger">
                  <span class="bug"></span>
                  <span class="bug"></span>
                  <span class="bug"></span>
                </div>
                <div class="course-menu">
                  <ul>
                    <li>
                      <a href="#">All</a>
                    </li>
                    <li>
                      <a href="#">Html</a>
                    </li>
                    <li>
                      <a href="#">Css</a>
                    </li>
                    <li>
                      <a href="#">JavaScript</a>
                    </li>
                    <li>
                      <a href="#">Linux</a>
                    </li>
                    <li>
                      <a href="#">Splunk</a>
                    </li>
                  </ul>
                </div>
                <div class="course-content">
                  <div class="rove">
                      <div class="box">
                        <div class="img-con">
                        <img src={learn} alt="Learn" />
                        </div>
                        <div class="cert-de">
                          <div class="cert-html">
                            <a href="#">Certificate</a>
                            <a href="#">HTML</a>
                          </div>
                          <p>
                            Learn Html - Become certified Introduction to Html
                          </p>
                          <div class="start">
                            <a href="#">Start Now</a>
                            </div>
                          
                        </div>
                      </div>
                    
                      <div class="box">
                        <div class="img-con">
                        <img src={css} alt="Css" />
                        </div>
                        <div class="cert-de">
                          <div class="cert-html">
                            <a href="#">Certificate</a>
                            <a href="#">CSS</a>
                          </div>
                          <p>
                            Learn Css - Become certified, Introduction to Css
                          </p>

                          <div class="start">
                            <a href="#">Start Now</a>
                            </div>
                        </div>
                      </div>
                    
                    
                      <div class="box">
                        <div class="img-con">
                        <img src={js} alt="Js" />
                        </div>
                        <div class="cert-de">
                          <div class="cert-html">
                            <a href="#">Certificate</a>
                            <a href="#">Javascript</a>
                          </div>
                          <p>
                            Learn JavaScript - Become certified Introduction to
                            JavaScript
                          </p>

                          <div class="start">
                            <a href="#">Start Now</a>
                            </div>
                        </div>
                      </div>
                  
                  
                      <div class="box">
                        <div class="img-con">
                        <img src={linux} alt="Linux" />
                        </div>
                        <div class="cert-de">
                          <div class="cert-html">
                            <a href="#">Certificate</a>
                            <a href="#">Linux Admin</a>
                          </div>
                          <p>Learn Linux - Become a certified Linux Admin</p>

                          <div class="start">
                            <a href="#">Start Now</a>
                            </div>
                        </div>
                      </div>
      
                    
                      <div class="box">
                        <div class="img-con">
                        <img src={splunk} alt="Splunk" />
                        </div>
                        <div class="cert-de">
                          <div class="cert-html">
                            <a href="#">Certificate</a>
                            <a href="#">Splunk Engr</a>
                          </div>
                          <p>
                            Learn Splunk - Become a certified Splunk Engineer
                          </p>

                          <div class="start">
                            <a href="#">Start Now</a>
                            </div>
                        </div>
                      </div>
                    
                    
                      <div class="box">
                        <div class="img-con">
                        <img src={css} alt="Css" />
                        </div>
                        <div class="cert-de">
                          <div class="cert-html">
                            <a href="#">Certificate</a>
                            <a href="#">HTML</a>
                          </div>
                          <p>Learn HTML - Become certified</p>

                          <div class="start">
                            <a href="#">Start Now</a>
                            </div>
                        </div>
                      </div>
                  
                  </div>
                  <div class="prev-next">
                    <div class="prev-next-con">
                      <span>&#8592;</span>
                      <a href="#">1</a>
                      <a href="#">2</a>
                      <a href="#">3</a>
                      <a href="#">4</a>
                      <span>....</span>
                      <a href="#">20</a>
                      <span>&#8594;</span>
                      </div>
                    </div>
                </div>
              </div>
            </div>
        </>
    )
}

Programs.propTypes = {

}

export default Programs