import React from "react";
import Footer from "../Footer/Footer";
import MiddlePart from "../MiddlePart/MiddlePart";
import ImageSlider from "../Slider/ImageSlider";
import Navbar from "./Navbar";

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <br /><br /><br /><br /><br />
            <ImageSlider />
            <MiddlePart />
            <Footer />
        </div>
    );
};

export default LandingPage;