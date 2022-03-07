import React, { useEffect, useState } from 'react';
import Loading from '../../Components/Loading';
import { useSelector } from 'react-redux';
import CartProductCard from './components/CartProductCard';

function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);

  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    if (cartItems) {
      let price = 0;
      cartItems.forEach((element) => {
        price += element.price * element.counter;
      });
      setTotalPrice(price);
    }
  }, [cartItems]);

  if (!cartItems) {
    return (
      <div className="flex min-h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 px-8 justify-around my-6 min-h-screen">
      <div className="flex flex-col">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((product) => {
            return <CartProductCard key={product.id} product={product} />;
          })
        ) : (
          <div className="flex justify-center items-center text-black text-lg font-semibold">
            Nothing To Show! Add Something From Products
          </div>
        )}
      </div>
      <div className="flex flex-col ">
        <div className="flex flex-col items-center px-4  text-white gap-8 border-2 bg-gray-800 border-gray-800 rounded-lg w-[300px] h-[200px]">
          <div className="flex text-lg">
            Congratualtions !! your order is eligible for FREE shipping!
          </div>
          <div className="text-semibold">Sub Total : ₹ {totalPrice}</div>
          <div className="flex w-full">
            <button className="border-2 outline-none bg-red-400 border-red-400 px-3 py-1.5 rounded-lg mx-auto hover:bg-red-600">
              Place Your Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
