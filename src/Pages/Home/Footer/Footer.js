import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark text-light mt-5'>
            <div className="row p-2  justify-content-md-center justify-content-lg-center">
                <div className="   col-xs-12 col-sm-6 col-lg6">
                    <h3>About</h3>
                    <p>Hey, I am Sabbir Hossain, from Bangladesh. I am a front-end developer. trained from <a href="https://web.programming-hero.com/">Programming Hero</a>. Now I am searching for an internship for more experience.</p>
                </div>
                <div class="  col-xs-12 col-sm-6 col-lg-6">
                    <h3>Contact me</h3>
                    Email:sabbirab3@gmail.com
                    <a href="https://form.jotform.com/213333873135049" target="_blank"><button className='btn btn-warning m-2'>Contract  me</button></a>
                </div>
            </div>

            <div className='container'>
                <hr />
                <p>&copy; 2021 developer Sabbir Hossain
                </p>
            </div>

        </div>
    );
};

export default Footer;