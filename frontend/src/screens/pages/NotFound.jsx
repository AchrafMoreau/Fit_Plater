import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import INFO from "../../data/user";
import SEO from "../../data/seo";

const NotFound = () => {
    return (
      <>
        <Helmet>
          <title>{`${SEO[10].page} | ${INFO.main.title}`}</title>
          <meta name="description" content={SEO[10].description} />
          <meta name="keywords" content={SEO[10].keywords.join(", ")} />
        </Helmet>
        
        
        <div className="min-h-screen flex flex-grow items-center justify-center ">
          <div className="rounded-lg bg-white p-8 text-center ">
            <h1 className="mb-4 text-4xl font-Outfit font-bold text-myBlue">404</h1>
            <p className="text-gray-600 font-Poppins">Oops! The page you are looking for could not be found.</p>
            <Link to="/" className="mt-4 inline-block rounded bg-myBlue px-4 py-2 font-Poppins font-semibold text-white hover:bg-[#FC6212]">
              Go back to Home
            </Link>
          </div>
        </div>
      </>
    );
  };
  
  export default NotFound;
  