import React from "react";
import Banner from "./Banner";
import Comments from "./Comments";
import Accordion from "./FAQ";
import HeroSection from "./HeroSection";
import WhyUs from "./WhyUs";
import INFO from "../../../data/user";
import SEO from "../../../data/seo";

const OutletPage = () => {
    return ( 
    <>
        <>
            <title>{`FIT PLATTER | ${INFO.main.title}`}</title>
            <meta name="description" content={SEO[0].description} />
            <meta name="keywords" content={SEO[0].keywords.join(", ")} />
        </>

        {/* Your components */}
        <HeroSection />
        <Comments />
        <WhyUs />
        <Banner />
        <Accordion />
    </> 
    );
}
 
export default OutletPage;
