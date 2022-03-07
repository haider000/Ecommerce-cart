import React from 'react';

function About() {
  return (
    <div className="min-h-screen text-center">
      <section className="text-gray-900 body-font pt-8">
        <h1 className="text-4xl text-center ">Our Story</h1>
        <div className="container px-5 py-4 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <p className="leading-relaxed text-lg">
              Providing our customers with a sophisticated ecommerce retail
              shopping experience. Our products coupled with a relaxed and
              gourmet atmosphere appeals to a wide variety of customers. With
              top-rated selections in fine quality clothing products, cosmetic
              products,and other accessories, Async Store is committed to
              providing the best merchandise selection at the lowest possible
              prices.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-gray-900 mt-8 mb-6"></span>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                2.7K
              </h2>
              <p className="leading-relaxed">Visitors</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                1.8K
              </h2>
              <p className="leading-relaxed">Subscribes</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                150
              </h2>
              <p className="leading-relaxed">Orders</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                500
              </h2>
              <p className="leading-relaxed">Products</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
