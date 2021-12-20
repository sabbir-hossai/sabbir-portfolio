import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';

import banner from '../../../../images/banner.jpg';

const TopBanner = () => {
    return (
        <div className='mt-5 '>
            <div className="container">
                <div className="row  justify-content-md-center justify-content-lg-center">
                    <div className="  mt-5 col-xs-12 col-sm-12 col-lg-7">
                        <h3>Welcome to my world!</h3>
                        <h2>I am <span className='text-warning'>Sabbir Hossain</span> </h2>
                        <h5>frontend web developer</h5>
                        <a href="https://drive.google.com/file/d/1P6mMKi3A3H54M3YPbMsQaFHRCz9X0bQ0/view?usp=sharing" class="btn btn-warning m-5 " target="_blank">Download resume</a>
                    </div>
                    <div class="  col-xs-12 col-sm-12 col-lg-5">
                        <img className="img-fluid" src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;