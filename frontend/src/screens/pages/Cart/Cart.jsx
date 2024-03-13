// Cart.jsx
import { FaTimes } from "react-icons/fa";
import CartProduct from "./CartProduct";
import { motion } from "framer-motion";
import EmptyCart from "../../../images/emptyCart.svg";
import { useSelector } from "react-redux";

const Cart = ({ showCart, setShowCart }) => {
  const { cartList, totalPrice } = useSelector((state) => state.Cart);

  return (
    <div
      className={`fixed inset-0 z-20 ${showCart ? "bg-black bg-opacity-50" : "hidden"}`}
      onClick={() => setShowCart(false)}
    >
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className="max-w-[400px] w-full h-full bg-white fixed right-0 top-0 p-6 transform"
        onClick={(e) => e.stopPropagation()}
      >
        <FaTimes
          className="absolute right-0 top-0 m-6 text-[24px] hover:text-gray-500 cursor-pointer"
          onClick={() => setShowCart(false)}
        />
        <h3 className="text-lg font-medium text-gray-600 uppercase mb-4">
          Your Cart
        </h3>
        <p className="text-gray-600">Total Items: {cartList.length}</p>
        <p className="text-gray-600">Total Price: {totalPrice} $</p>

        <div className="mt-6">
          {cartList.length > 0 ? (
            cartList.map((el) => (
              <CartProduct key={el.category} el={el} />
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

        {cartList.length > 0 && (
          <div className="flex justify-between mt-6">
            <button className="btn-blue">View Cart</button>
            <button className="btn-blue">Checkout</button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Cart;