import HeroCopy from "../Navbar-Footer/FirstSection";
import ContactForm from "./ContactForm";
import img from '../../../images/contact.jpeg'

const ContactUsApp = () => {
    
    let title = 'Contact us';

    return ( 
        <>
            <HeroCopy title={title} imgSrc={img} />
            <ContactForm />
        </>
     );
}
 
export default ContactUsApp;