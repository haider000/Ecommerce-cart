import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Loading';

import { useDispatch, useSelector } from 'react-redux';

import { addItem } from '../../redux/slices/cartSlice';
import { getProductDetails } from '../../redux/slices/productSlice';
import toast from 'react-hot-toast';

function ProductDetails() {
  const { currentProduct } = useSelector((state) => state.products);
  const [counter, setCounter] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [id, dispatch]);

  const handleCart = () => {
    dispatch(addItem({ ...currentProduct, counter }));
    toast.success('Item Added to cart', {
      icon: '😍',
    });
  };

  if (!currentProduct) {
    return (
      <div className="flex min-h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex justify-center py-6 bg-black text-white text-lg font-medium">
        {currentProduct.title}
      </div>
      <div className="flex flex-row justify-center gap-8 my-2">
        <div className="flex">
          <img
            className="h-[320px] w-[250px]"
            src={currentProduct.image}
            alt={currentProduct.title}
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex text-lg font-semibold mt-8">
            {currentProduct.title}
          </div>
          <div className="flex flex-row justify-start gap-2">
            <input
              type="number"
              value={counter}
              min={1}
              onChange={(e) => {
                setCounter(e.target.value);
              }}
              className="w-[30px] border-2 rounded-sm border-gray-900"
            />

            <button
              onClick={handleCart}
              className="bg-gray-900 rounded-lg px-2.5 py-1.5 border-2  text-white hover:text-gray-900 hover:bg-white  hover:border-gray-900 outline-none"
            >
              Add To Cart
            </button>
          </div>
          <p className="max-w-[400px] text-left">
            {currentProduct.description}
          </p>
          <div className="flex flex-row font-semibold">
            Price: ₹ {currentProduct.price}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
