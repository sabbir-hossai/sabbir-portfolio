import React from 'react';
import about from '../../../images/tbanner.jpg';

const Aboute = () => {
    return (
        <div>
            <div className='mt-5 '>
                <h1 className='m-5'>About me</h1>
                <div className="container">
                    <div className="row  justify-content-md-center justify-content-lg-center">
                        <div class="  col-xs-12 col-sm-12 col-lg-5">
                            <img className="img-fluid" src={about} alt="" />
                        </div>
                        <div className="  mt-5 col-xs-12 col-sm-12 col-lg-7">
                            <p>Hey, I am Sabbir Hossain, from Bangladesh. I am a front-end developer. trained from <a href="https://web.programming-hero.com/">Programming Hero</a>. Now I am searching for an internship for more experience.</p>
                            <span>
                                <button className='btn btn-warning m-2'>Hire me</button>
                                <a href="https://form.jotform.com/213333873135049" target="_blank"><button className='btn btn-warning m-2'>Contract  me</button></a>

                            </span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboute;