import React from 'react';
import { useHistory } from 'react-router-dom';

function ProductCard({ productDetail }) {
  const history = useHistory();
  return (
    <div className="flex flex-col gap-1 items-center">
      <div className="my-2 border-2 border-gray-900 p-4 rounded-lg">
        <img
          className="h-[320px] w-[250px]"
          src={productDetail.image}
          alt={productDetail.title}
        />
      </div>
      <div className="flex flex-col gap-1 items-center justify-center py-4">
        <div className="text-lg font-medium max-w-[250px] text-center">
          {productDetail.title}
        </div>
        <div className="font-semibold text-sm">₹ {productDetail.price}</div>
      </div>

      <div className="bg-gray-900 rounded-lg px-2.5 py-1.5 border-2  text-white hover:text-gray-900 hover:bg-white  hover:border-gray-900">
        <button
          className="border-none outline-none text-sm"
          onClick={() => {
            history.push(`/Products/${productDetail.id}`);
          }}
        >
          Details
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
