import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addToCart } from "../../../redux/CartSlice";
import EmptyCart from "../../../images/emptyCart.svg";
import { Link } from "react-router-dom";
import { IoIosArrowDropupCircle, IoIosArrowDropdownCircle  } from "react-icons/io";

function ShoppingCart() {
  const { cartList, totalPrice } = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (meal) => {
    dispatch(removeFromCart(meal));
  };

  const handleAddToCart = (meal) => {
    dispatch(addToCart(meal));
  };

  return (
      <div className="sm:flex min-h-screen pt-2 px-4 w-full">
        <div className="w-full sm:w-3/4 bg-white px-10 py-10 ">
          <div className="flex justify-between border-b pb-8 ">
            <h1 className="font-Outfit text-2xl">Shopping Cart</h1>
            <h2 className="font-Outfit text-2xl">{cartList.length} Items</h2>
          </div>

          {cartList.length > 0 ? (
            cartList.map((meal) => (
              <div className="md:flex items-stretch p4-4 py-8 md:py-10 lg:py-8 border-t border-gray-50" key={meal.id}>
                <div className="md:w-4/12 2xl:w-1/4 w-full  ">
                  <img src={meal.image} alt={meal.category} className="h-full object-center object-cover md:block hidden rounded-lg" />
                  <img src={meal.image} alt={meal.category} className="md:hidden w-full h-full object-center object-cover rounded-lg" />
                </div>
                <div className=" md:pl-3 md:w-8/12 2xl:w-3/4 flex py-4 px-1  flex-row justify-between">
                  
                  <div className=" gap-3 flex flex-col justify-between">
                    <p className="text-base font-Outfit leading-3 text-headersBlue md:pt-0 pt-2">{meal.category}</p>
                    <p className="text-gray-700 text-xs">
                      {meal?.calories} calories, {meal?.protein} g protein, {meal?.carbs} g carbs, {meal?.fat} g fat
                    </p>
                    <p className="text-base leading-3 underline text-red-500 cursor-pointer" onClick={() => handleRemoveFromCart(meal)}>
                      Remove
                    </p>
                  </div>
                                    
                  <div className="gap-3 flex flex-col justify-between">
                    <div class="flex items-center border-gray-100">
                      <span onClick={() => handleRemoveFromCart(meal)} class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-myBlue hover:text-blue-50"> - </span>
                      <input class="h-8 w-10 border bg-white text-center text-xs outline-none" type="number" value={meal.quantity} readOnly min="1" />
                      <span onClick={() => handleAddToCart(meal)} class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-myBlue hover:text-blue-50"> + </span>
                    </div>
                    <div className="flex justify-end">
                      <p className="text-base font-black leading-none text-headersBlue  ">{meal.price.toFixed(2)} MAD</p>
                    </div>
                  </div>
                
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center pt-10 justify-center gap-6">
              <img src={EmptyCart} className="w-1/2" alt="" />
              <p className="text-xl text-textColor font-semibold">Add some items to your cart</p>
            </div>
          )}

          <Link to="/home" className="flex font-semibold text-myOrange text-sm mt-10">
            <svg className="fill-current mr-2 w-4" viewBox="0 0 448 512">
              <path
                d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"
              />
            </svg>
            Continue Shopping
          </Link>
        </div>

        <div id="summary" className="w-full sm:w-1/4 md:w-1/2 px-8 py-10">
          <h1 className="font-Outfit text-2xl border-b pb-8">Order Summary</h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-Outfit text-sm uppercase">Items {cartList.length}</span>
            <span className="font-Outfit text-sm">{totalPrice.toFixed(2)} MAD</span>
          </div>
          <div>
            <label className="font-Outfit inline-block mb-3 text-sm uppercase">Delivery</label>
            <select className="block p-2 text-headersBlue w-full text-sm">
              <option>Delivery - 10.00 MAD</option>
            </select>
          </div>
          <div className="border-t mt-8">
            <div className="flex font-Outfit justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>{(totalPrice + 10).toFixed(2)} MAD</span>
            </div>
            <button className="bg-myBlue font-Outfit hover:bg-myOrange py-3 text-sm text-white uppercase w-full duration-150">
              Checkout
            </button>
          </div>
        </div>
      </div>
  );
}

export default ShoppingCart;
