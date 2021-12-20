import React from 'react';
import Navigation from '../../Navigation/Navigation';
import Aboute from '../Aboute/Aboute';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Services from '../Services/Services/Services';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <Aboute></Aboute>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;