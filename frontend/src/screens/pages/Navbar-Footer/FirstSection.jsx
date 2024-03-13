import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroCopy = ({title, imgSrc}) => {
    
        return (
          <div className="w-full h-full flex flex-col items-center mx-auto mb-12 gap-10">
            <motion.section
                animate={{ opacity : 100 }} 
                initial={{ opacity : 0 }} 
                transition={{ delay: 0.1 }}
                className="w-full h-[250px] bg-cover bg-center items-center md:rounded-lg"
                style={{
                    backgroundImage:`url(${imgSrc})`,
                    objectFit: 'cover',
              }}
            >
              <div className="container flex mx-auto flex-col items-center justify-center h-full">
                <motion.h1 
                  className="md:text-5xl text-3xl font-Outfit text-headersBlue"
                  animate={{ opacity : 100 }} 
                  initial={{ opacity : 0 }} 
                  transition={{ delay: 0.2 }}
                >
                  {title}
                </motion.h1>
              </div>
            </motion.section>
            <motion.div
              animate={{ opacity : 100 }} 
              initial={{ opacity : 0 }} 
              transition={{ delay: 0.3 }}
            >
              <Link
                to="/custom"
                className="inline-flex items-center bg-myOrange font-Poppins font-semibold text-white py-3 px-10 rounded-lg hover:bg-orange-600 duration-100"
              >
                Custom
              </Link>
            </motion.div>
          </div>
        );
      };
      
      export default HeroCopy;