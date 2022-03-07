import React from 'react';

import { removeItem, setItemCounter } from '../../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';

const CartProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col md:flex-row justify-center gap-8 my-2">
      <div className="flex">
        <img
          className="h-[280px] w-[200px]"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex text-lg font-semibold mt-8">{product.title}</div>
        <div className="flex flex-row justify-center md:justify-start gap-2">
          <input
            type="number"
            value={product.counter}
            min={1}
            onChange={(e) => {
              dispatch(
                setItemCounter({
                  id: product.id,
                  newValue: e.target.value,
                })
              );
            }}
            className="w-[30px] border-2 rounded-sm border-gray-900"
          />
        </div>
        <p className="max-w-[400px] text-left">{product.description}</p>
        <div className="flex flex-row justify-center font-semibold">
          Price: ₹ {product.price}
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => {
              dispatch(removeItem(product.id));
            }}
            className="bg-gray-900 rounded-lg px-2.5 py-1.5 border-2 max-w-[40%] text-white hover:text-gray-900 hover:bg-white  hover:border-gray-900 outline-none"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
