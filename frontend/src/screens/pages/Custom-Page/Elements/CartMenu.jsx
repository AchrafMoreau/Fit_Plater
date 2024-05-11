// Cart Menu
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartMenuElem from "./cartMenuElement";
import EmptyCart from "../../../../images/emptyCart.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../redux/CartSlice";


const CartMenu = ({ showCart, setShowMenu }) => {
  const { MenuList, totalPrice : menuTotalPrice } = useSelector((state) => state.ElemMenu);
  const { cartList, totalPrice : cartTotalPrice } = useSelector((state) => state.Cart);

  const dispatch = useDispatch();

  const addeElemtToCart = () => {
    // Check if the plat already exists in the cart
    const platExists = cartList.some(item => item.category === 'Plat');
  
    // If the plat doesn't exist, add it to the cart
    if (!platExists && MenuList.length > 0) {
      const plat = {
        id: MenuList[0].id, // Assuming you want to use the first item's ID as the plat ID
        category: 'Plat',
        calories: MenuList.reduce((acc, item) => acc + (item.calories * item.quantity), 0), // Multiply calories by quantity and sum
        protein: MenuList.reduce((acc, item) => acc + (item.protien * item.quantity), 0), // Multiply protein by quantity and sum
        fat: MenuList.reduce((acc, item) => acc + (item.fat * item.quantity), 0), // Multiply fat by quantity and sum
        ingredients: MenuList.map(item => item.name).join(', '), // Concatenate ingredients
        image: MenuList[0].image, // Assuming you want to use the first item's image for the plat
        price: menuTotalPrice, // Total price of the plat
      };
      dispatch(addToCart(plat)); // Dispatch addToCart action to add the plat to the cart
    }
  };
  


  return (

      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className="w-[425px] min-h-[500px] h-full relative bg-white p-6 transform  rounded-lg hover:shadow-lg shadow-md"
      >
        <FaTimes
          className="absolute right-0 top-0 m-6 text-[24px] text-gray-400 hover:text-gray-500 cursor-pointer"
          onClick={() => setShowMenu(false)}
        />
        <h3 className="text-lg font-medium text-gray-600 uppercase mb-4">
          Plat Elements
        </h3>
        <p className="text-gray-600">Total Elments: {MenuList.length}</p>
        <p className="text-gray-600">Plat Price: {menuTotalPrice} $</p>

        <div className="mt-6">
          {MenuList.length > 0 ? (
            MenuList.map((el) => (
              <CartMenuElem key={el.id} el={el} />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center gap-6">
              <img src={EmptyCart} className="w-300" alt="" />
              <p className="text-xl text-textColor font-semibold">
                Add some items to your cart
              </p>
            </div>
            )} 
        </div>

        {MenuList.length > 0 && (
          <div className="flex justify-between mt-5 ">
            <Link to='/shopping-cart' className="btn-secondary-sm">View Cart</Link>
            <button className="btn-secondary-sm" onClick={addeElemtToCart}>Add To cart</button>
          </div>
        )}
      </motion.div>
  );
};

export default CartMenu;




