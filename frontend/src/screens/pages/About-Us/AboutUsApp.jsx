import HeroCopy from "../Navbar-Footer/FirstSection";
import Map from "./Map";
import OurChefs from "./OurChefs";
import ServicesInfo from "./ServicesInfo";
import img from '../../../images/about.jpg'

const AboutUsApp = () => {

    const title = 'About us';
    
    
    return ( 
        <>
            <HeroCopy title={title} imgSrc={img} />
            <ServicesInfo />
            <OurChefs />
            <Map />
        </>
     );
}
 
export default AboutUsApp;