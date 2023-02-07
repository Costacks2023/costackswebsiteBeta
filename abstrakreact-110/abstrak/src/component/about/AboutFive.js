import React from 'react';
import { Link } from 'react-router-dom';


const AboutFive = () => {
    return (
      <div className="section-padding-equal">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="about-team">
                    <div className="thumbnail">
                        {/* <img src={process.env.PUBLIC_URL + "/images/about/about-2.png"} alt="thumbnail" /> */}
                    </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="about-team">
                    <div className="section-heading heading-left">
                        <span className="subtitle">Our Team</span>
                        <h2>Alone we can do so little; together we can do so much.</h2>  
                        <p>This is the motto that we have and we ensure that our team also ensures this, whether it is about being collaborative enough amongst themselves or being collaborative with our clients.</p>
                        {/* This button is useless for now. */}
                        <Link to="#" className="axil-btn btn-large btn-fill-primary">Our Team</Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFive;