import HeroCopy from "../Navbar-Footer/FirstSection";
import img from '../../../images/custom.webp'
import INFO from "../../../data/user";
import SEO from "../../../data/seo";

const CustomApp = () => {

    const title = 'Custom';


    return ( 
    <>
            <>
                <title>{`${title} | ${INFO.main.title}`}</title>
                <meta name="description" content={SEO[2].description} />
                <meta name="keywords" content={SEO[2].keywords.join(", ")} />
            </>
        <HeroCopy title={title} imgSrc={img} />
    </>
    );
}
 
export default CustomApp;