import React, { useEffect, useState } from 'react';
import Loading from '../../Components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../redux/slices/productSlice';
import ProductCard from './components/ProductCard';

const categories = [
  "men's clothing",
  'jewelery',
  'electronics',
  "women's clothing",
];

function Products() {
  const [category, setCategory] = useState('');
  const { products, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  if (!products || isLoading) {
    return (
      <div className="flex min-h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="flex flex-col my-8 md:mx-2 md:w-[30%]">
        <div className="text-lg font-semibold text-gray-900 mb-8">
          Shop By Category
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
          {categories.map((val) => (
            <button
              onClick={() => {
                setCategory((prevVal) => (prevVal === val ? '' : val));
              }}
              className={`${
                val === category
                  ? `bg-white text-gray-900 border-gray-900`
                  : `bg-gray-900 text-white`
              }  rounded-lg px-2.5 py-1.5 border-2 min-w-[250px]`}
            >
              {val}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-8 md:w-[70%]">
        {products &&
          category &&
          products
            .filter((productDetail) => productDetail.category === category)
            .map((productDetail) => {
              return (
                <ProductCard
                  key={productDetail.id}
                  productDetail={productDetail}
                />
              );
            })}

        {products &&
          !category &&
          products.map((productDetail) => {
            return (
              <ProductCard
                key={productDetail.id}
                productDetail={productDetail}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Products;
