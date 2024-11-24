import React from "react";
import { Link } from 'react-router-dom';
import mainimg from "../assets/image/slideshow-1.jpg"


const products = [
  {
    id: 1,
    name: "Colette",
    price: "$48.99",
    img: "src/assets/image/img1.jpg", // Replace with real image paths
  },
  {
    id: 2,
    name: "Jimmy Choo",
    price: "$48.99",
    img: "src/assets/image/img2.jpg",
  },
  
  {
    id: 3,
    name: "Givenchy Heels",
    price: "$48.99",
    img: "src/assets/image/img3.jpg",
  },
  {
    id: 3,
    name: "Givenchy Heels",
    price: "$48.99",
    img: "src/assets/image/img3.jpg",
  },
  {
    id: 1,
    name: "Colette",
    price: "$48.99",
    img: "src/assets/image/img4.jpg", // Replace with real image paths
  },
  {
    id: 2,
    name: "Jimmy Choo",
    price: "$48.99",
    img: "src/assets/image/img2.jpg",
  },
  
  {
    id: 1,
    name: "Colette",
    price: "$48.99",
    img: "src/assets/image/img4.jpg", // Replace with real image paths
  },
  {
    id: 2,
    name: "Jimmy Choo",
    price: "$48.99",
    img: "src/assets/image/img2.jpg",
  },
  
  // Add more products as needed
];

const Grid = () => {
  return (
 <>
        {/*-- hero section  --*/}

        <div className="bg-[url('./assets/image/slideshow-1.jpg')] py-40">
            
        <div className="container mx-auto px-4 flex">
          <div>

          </div>
          
          <div>
          <h2 className="text-4xl font-semibold mb-4 ">Awsome!!!</h2>
          <p className="text-gray-600 mb-8  text-xl ">
            The class product and trading item, make the fasion rore
          </p>
          <Link to='/Shop' className="bg-emerald-900  text-white px-6 py-3 rounded-md text-center ">
            Shop Now
          </Link>
          </div>
        </div>
        </div>
      
    
  
  








    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">New Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500">{product.price}</p>
                <button className="mt-4 bg-black text-white px-4 py-2 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    </>
  )
}

export default Grid;