import React from "react";
import EmptyCart from "../EmptyCart";
import CartItem from "../CartItem";
import { DISH_CDN_URL } from "../../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { deleteCartItem, clearCart } from "../../store/cart";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  const dispatch = useDispatch();
  const totalItems =  cartItems.length

  if (totalItems === 0) return <EmptyCart/>;

  return (
    <>
      <div className="font-bold text-center mb-7 text-2xl">Cart Summary</div>
      <div className="flex gap-x-10 max-w-5xl mx-auto">
        <div className="w-7/12 border border-slate-100 rounded-lg shadow p-5 bg-slate-50 h-fit">
          <div className="font-bold flex justify-between">
            <span>{`${totalItems} Item${totalItems > 1 ? 's' : ''}`}</span>
            <span className="uppercase cursor-pointer" onClick={() => dispatch(clearCart())}>
              Clear Cart
            </span>
          </div>
          {cartItems.map((i) => {
            const { id, name, defaultPrice, price, imageId } = i?.card?.info || {};
            const itemPrice = (defaultPrice || price)/100;
            return (
              <CartItem
                key={id}
                imageUrl={`${DISH_CDN_URL}${imageId}`} 
                name={name}
                price={itemPrice}
                onDeleteItem={() => dispatch(deleteCartItem({ id, itemPrice }))}
              />
            );
            })
          }
        </div>
        <div className="w-5/12 border border-slate-100 rounded-lg shadow p-5 bg-slate-50 h-fit">
          <div className="font-bold mb-5">Order total</div>
          <div className="flex justify-between">
            <span>Item Total</span>
            <span>₹{cartTotal}</span>
          </div>
          <div className="border-t border-black border-dashed my-3" />
          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span>₹20</span>
          </div>
          <div className="border-t border-black border-dashed my-3" />
          <div className="flex justify-between">
            <span>Taxes</span>
            <span>₹{cartTotal * 0.1}</span>
          </div>
          <div className="border-t border-black my-3" />
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>₹{(cartTotal * 0.1) + cartTotal + 20}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;