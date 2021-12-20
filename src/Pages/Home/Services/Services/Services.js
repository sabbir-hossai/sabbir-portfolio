import React from 'react';
import laptopGallery from '../../../../images/laptop gallery.png';
import travel from '../../../../images/travel.png';
import hospital from '../../../../images/st hospital.png';

const Services = () => {
    return (
        <div className='container'>
            <h1 className='m-5'>My recent Projects</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div className="col ">
                    <div class="card h-100">
                        <img src={laptopGallery} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Laptop Gallery MERN stack-web site</h5>
                            <p className="card-text"> The home page of this site is item number one header, top banner, popular
                                products review, and footer.</p>
                        </div>
                        <div className="card-footer">
                            <button className='btn btn-warning'>see more...</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card h-100">
                        <img src={travel} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Tourismo travel MERN stack-web site</h5>
                            <p className="card-text">The home page has six sections navigation, top banner, most popular
                                package, most popular Guides tips before travel, and footer.</p>
                        </div>
                        <div className="card-footer">
                            <button className='btn btn-warning'>see more...</button>
                        </div>
                    </div>

                </div>
                <div className="col">
                    <div class="card h-100">
                        <img src={hospital} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">ST Hospital</h5>
                            <p className="card-text">The home page has four sections navigation, top slider, all service, and
                                footer.
                            </p>
                        </div>
                        <div className="card-footer">
                            <button className='btn btn-warning'>see more...</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;