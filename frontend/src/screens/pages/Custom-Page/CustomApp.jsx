import HeroCopy from "../Navbar-Footer/FirstSection";
import img from '../../../images/custom.jpeg'
import axios from "axios";
import { useEffect, useState } from "react";

const CustomApp = () => {

    const title = 'Custom';
    const [sidebar, setSidebar] = useState(false);
    const [meal, setMeal] = useState({
        element: [],
        price: 0,
        fat : 0,
        protien: 0,
        cal: 0,
        carbo: 0,
    })

    let newArryElement = new Array(); 
    const AddToMealButton = (elm)=>{
        console.log(elm)
        setSidebar(true)
        let alreadyExist= false; 
        meal.element.forEach((find)=> {
            if(find.id === elm.id){
                alreadyExist = true
            }
        })

        if(alreadyExist){
            meal.element.forEach((prevElement)=>{
                if(prevElement.id === elm.id){
                    if(elm.measuredByGram) prevElement.size += 100
                    if(!elm.measuredByGram) prevElement.size += 1
                }
                newArryElement.push(prevElement)
            })
        }
        setMeal((prev)=>({
            element: newArryElement.length > 0 ? newArryElement :[...prev.element, {id:elm.id, name:elm.name, size: elm.measuredByGram? 100: 1, measuredByGram: elm.measuredByGram}] ,
            price: parseFloat(prev.price) + parseFloat(elm.price),
            fat: prev.fat + elm.fat,
            protien: prev.protien + elm.protien,
            cal: prev.cal + elm.calories,
            carbo: prev.carbo + elm.carbohydrates,
        }))
    }

    // console.log("new Array",newArryElement)
    // console.log("meal",meal)
    const [element, setElement] = useState([])
    useEffect(()=>{

        axios.get('http://127.0.0.1:8000/api/element')
            .then(({data})=> setElement(data))
            .catch((err)=> console.log(err))
    },[])

    // console.log(meal)
    const handelOrder = ()=>{
        const token = JSON.parse(localStorage.getItem('user')).token
        console.log(token)
        axios.post('http://127.0.0.1:8000/api/order',meal,{
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json",
                // "Authorization": token
                "Authorization": `Bearer ${token}`
            },
        })
            .then(({data})=> console.log(data))
            .then((err)=> console.log(err))
    }
    
    return ( 
        
    <>
        <HeroCopy title={title} imgSrc={img} />
        <div className={`hero ${sidebar ? 'active' : ''}`}>
            <div className='content'>
                {element.map((elm)=>(
                    <div className="card" key={elm.id}>
                        <div className="card-img">
                            <img src={elm.image} alt="" />
                        </div>
                        <div className="card-content">
                            <h1>{elm.name}</h1>
                            <div className="info">
                                <p>{elm.calories} Calories / 100g</p>
                                <p>{elm.carbohydrates} Carbohydrates / 100g</p>
                                <p>{elm.protien} Protien / 100g</p>
                                <p>{elm.fat} Fat / 100g</p>
                            </div>
                            <div className="footer">
                                <div className="price">
                                    {elm.price} MAD for {elm.measuredByGram ? "100 g" : 'one unit'}
                                </div>
                                <button className="addToMeal" onClick={(e)=>AddToMealButton(elm)}>
                                    Add To Meal
                                </button>
                            </div>
                            
                        </div>

                    </div>

                ))}
            </div>

            <div className={`sidebar ${sidebar ? "active" : ""} `}>
                your Meal
                <div>
                    <h1 style={{fontWeight:"bolder", fontSize:"1.5rem"}}>ELements</h1>
                    <div className="elements">
                        {meal.element.map((elm)=>{
                            return(
                                <p key={elm.id}>{elm.name} / {elm.size} { elm.measuredByGram ? "g" : "unit"}</p>
                            )
                        })}
                    </div>
                </div>

                <div className="info">
                    {meal.carbo} carbo, {meal.cal} cal, {meal.protien} protine, {meal.fat} fat
                </div>

                <div className="footer">
                    <div className="ttlPrice">
                        {meal.price} MAD
                    </div>
                    <botton type='botton' className="buy" onClick={handelOrder}>
                        Order
                    </botton>
                </div>
            </div>
        </div>


    </> 
    );
}
 
export default CustomApp;