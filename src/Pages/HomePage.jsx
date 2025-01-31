import React from "react";

// components
import Navbar from "../Components/Home/Navbar";
import Hero from "../Components/Home/Hero";
import Footer from "../Components/Home/Footer";
import MobileNavbar from "../Components/Home/MobileNavbar.jsx";
import Feedback from "../Components/Home/feedback.jsx";
import TemplatesSlider from "../Components/Home/TemplatesSlider.jsx";
import Sponsor from "../Components/Home/Sponsor.jsx";
import Faq from "../Components/Home/Faq.jsx";
import ZenUITools from "../Components/Home/ZenUITools.jsx";


const HomePage = () => {

    return (
        <div className='dark:bg-darkBgColor transition-all duration-500'>
            <Navbar/>
            <div className='overflow-x-hidden'>
                <MobileNavbar />
                <Hero />
                <ZenUITools/>
                <Feedback/>
                <TemplatesSlider/>
                <Faq/>
                <Sponsor/>
                <Footer/>
            </div>
        </div>
    );
};

export default HomePage;
