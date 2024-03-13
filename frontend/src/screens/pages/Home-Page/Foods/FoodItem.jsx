import { BiSolidCartAdd } from "react-icons/bi";
// import { addToCart } from "../../../../redux/CartSlice";
import { useDispatch } from "react-redux";

const FoodItem = ({ item, setSelectedItem, setShowDetail }) => {

    const  dispatch = useDispatch();
    
    const handleAdd = (item) => {
        // dispatch(addToCart(item))
    }
    
    return (
        <div
            onClick={() => {
                setSelectedItem(item)
                setShowDetail(true)
            }} 
            className="card card-compact cursor-pointer w-64 lg:w-80 bg-white hover:shadow-lg shadow-md"
        >
            <figure>
                <img className="hover:scale-105 duration-300" src={item.image} alt={item.category} />
            </figure>
            <div className="card-body text-myBlue">
                <h2 className="card-title ">{item.category}</h2>
                <p>{item.calories} calories, {item.protein} g protein, {item.carbs} g carbs, {item.fat} g fat</p>
                <div
                    onClick={(e) => e.stopPropagation()} 
                    className="card-actions py-3 justify-between items-center"
                >
                    <p             
                        onClick={() => {
                            setSelectedItem(item)
                            setShowDetail(true)
                        }}  
                        className=" text-myOrange font-Poppins text-sm font-semibold underline">
                        View Detail
                    </p>
                    <span 
                        className="mr-2 hover:text-myOrange active:scale-95 hover:scale-105 duration-100"
                        onClick={() => handleAdd(item)}
                    >
                            <BiSolidCartAdd size={30}/>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;




{/* <a */}
// href="#"
// className="mx-auto flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:shadow-xl transition-all duration-400"        >
// <img
// src={item.image}
// alt={item.category}
// className="object-cover bg-cover w-96 rounded-t-lg h-64 md:h-64 md:w-48 md:rounded-none md:rounded-l-lg"
// />
// <div className="flex flex-col justify-between p-4 leading-normal">
//     <h5 className="mb-2 text-2xl font-bold tracking-tight text-headersBlue">
//         {item.category}
//     </h5>
//     <p className="mb-3 font-normal text-gray-700">
//         {item.calories} calories, {item.protein} g protein, {item.carbs} g
//         carbs, {item.fat} g fat
//     </p>
//     <ul>
//         {item.ingredients.map((item, index) => (
//         <li key={index} className="text-base text-myBlue">
//             - {item}
//         </li>
//         ))}
//     </ul>
//     <div className="flex items-center justify-left mt-4">
//         <button className="px-4 py-2 font-Outfit text-white bg-myOrange rounded-full hover:bg-orange-600">
//         Order Now
//         </button>
//     </div>
// </div>
// </a>