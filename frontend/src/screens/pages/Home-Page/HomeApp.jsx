import HeroCopy from "../Navbar-Footer/FirstSection";
import RecommendationPg from "./RecommendationPg";
import Recommendations from "./Recommendations";
import img from '../../../images/home.jpeg';
import Food from "./Foods/Food";


const HomeApp = () => {

    const title = 'Home';

    
    
    return ( 
        <>
            <HeroCopy title={title} imgSrc={img} />
            <RecommendationPg />
            <Recommendations />
            <Food />
        </>
     );
}
 
export default HomeApp;