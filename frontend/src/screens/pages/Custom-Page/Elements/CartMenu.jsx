// Cart Menu
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import EmptyCart from "../../../../images/emptyCart.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartMenuElem from "./cartMenuElement";

const CartMenu = ({ showCart, setShowMenu }) => {
  const { MenuList, totalPrice } = useSelector((state) => state.ElemMenu);

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
        <p className="text-gray-600">Plat Price: {totalPrice} $</p>

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
          <div className="flex justify-between mt-6">
            <Link to='/shopping-cart' className="btn-blue">View Cart</Link>
            <button className="btn-blue">Checkout</button>
          </div>
        )}
      </motion.div>
  );
};

export default CartMenu;




