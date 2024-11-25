import React, { useState } from "react";

function Shop() {
  const [quantity, setQuantity] = useState(1);

  // Increase quantity
  const increaseQuantity = () => setQuantity(quantity + 1);

  // Decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <>
      <div className="container mx-auto p-6 bg-emerald-50 min-h-screen">
        {/* Product Section */}
        <div className="flex flex-wrap">
          {/* Product Image Gallery */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img
                src="https://via.placeholder.com/500"
                alt="Product Image"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="flex gap-2 mt-4">
              {/* Thumbnail Images */}
              <img
                src="https://via.placeholder.com/100"
                alt="Thumb"
                className="w-20 h-20 rounded-lg border border-emerald-200"
              />
              <img
                src="https://via.placeholder.com/100"
                alt="Thumb"
                className="w-20 h-20 rounded-lg border border-emerald-200"
              />
              <img
                src="https://via.placeholder.com/100"
                alt="Thumb"
                className="w-20 h-20 rounded-lg border border-emerald-200"
              />
              <img
                src="https://via.placeholder.com/100"
                alt="Thumb"
                className="w-20 h-20 rounded-lg border border-emerald-200"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 pl-6">
            {/* Product Title */}
            <h1 className="text-3xl font-semibold mb-4 text-emerald-700">
              (Product 35) Sample - Clothing and Accessories
            </h1>

            {/* Product Info */}
            <p className="text-sm text-emerald-600">SKU: W060804 | Availability: In Stock</p>
            <p className="text-sm text-emerald-600">Vendor: Colette</p>

            {/* Price */}
            <div className="text-2xl font-bold text-emerald-800 my-4">$48.99</div>
            <p className="text-sm text-red-600 mb-4">Please hurry! Only 10 left in stock</p>

            {/* Options */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Color:</label>
              <div className="flex items-center space-x-4">
                <button className="w-8 h-8 rounded-full border border-gray-300 bg-orange-400"></button>
                <button className="w-8 h-8 rounded-full border border-gray-300 bg-gray-300"></button>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Size:</label>
              <div className="flex space-x-4">
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-emerald-100 transition">
                  XS
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-emerald-100 transition">
                  S
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-emerald-100 transition">
                  M
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-emerald-100 transition">
                  L
                </button>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4 mb-4">
              <button
                onClick={decreaseQuantity}
                className="px-4 py-2 bg-emerald-100 rounded-md hover:bg-emerald-200 transition"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 text-center border border-emerald-300 rounded-md"
              />
              <button
                onClick={increaseQuantity}
                className="px-4 py-2 bg-emerald-100 rounded-md hover:bg-emerald-200 transition"
              >
                +
              </button>
            </div>
            <div className=" flex justify-center py-6 m-4  ">
            {/* Add to Cart */}
            <button className="w-full py-3 bg-emerald-500 text-white text-lg font-medium rounded-lg mt-2  m-2 hover:bg-emerald-700">
              Add to Cart
            </button>
            <button className="w-full py-3 bg-emerald-500 text-white text-lg font-medium rounded-lg mt-2 m-2 hover:bg-emerald-600">
              Buy Now
            </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-6">
              <div className="flex space-x-2">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Trust Badge 1"
                  className="w-10 h-10"
                />
                <img
                  src="https://via.placeholder.com/50"
                  alt="Trust Badge 2"
                  className="w-10 h-10"
                />
                <img
                  src="https://via.placeholder.com/50"
                  alt="Trust Badge 3"
                  className="w-10 h-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;