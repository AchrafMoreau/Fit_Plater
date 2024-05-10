import { useEffect, useState } from 'react';
import ELementItem from './ElementItem';
import Skeleton from './Skeleton';
import CartMenu from './CartMenu';


const Elements = () => {
    const [loading, setLoading] = useState(false);
    const [elements, setElements] = useState([])
    const [showMenu, setShowMenu] = useState(false)


    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/element')
            .then(res => res.json())
            .then(data => setElements(data))
            .catch(err => console.log(err));
    
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);
    

    const section = (title, subtitle) => {
        return (
            <>
                <div className='mx-4'>
                    <h3 className="font-Outfit text-2xl text-headersBlue font-semibold">
                        {title}
                    </h3>
                    <p className="font-sans text-sm text-gray-500 ">
                        {subtitle}
                    </p>
                </div>

                {/* All foods */}
                <div className="flex flex-row mt-10">
                    <div className="gap-4 w-full flex justify-center flex-row mx-auto flex-wrap transition-all duration-300">
                        {elements.map((elem) => (
                            loading ? <Skeleton key={elem.id} /> : <ELementItem key={elem.id} elem={elem} setShowMenu={setShowMenu}   />
                        ))}
                    </div>
                    { showMenu && <CartMenu setShowMenu={setShowMenu} />}
                </div>
            </>
            );
        };

    return (
        <div className="relative">
            <section className='my-20 flex justify-center flex-col gap-4 mx-auto bg-[#FFF6EA] px-[3%] pt-8 pb-20'>
                {section('Elements', 'Select Elements and choose your meal')}
            </section>
        </div>
    );
};

export default Elements;
