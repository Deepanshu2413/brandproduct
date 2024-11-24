import React from "react";

const Blog = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-6">
      {/* Header Section */}
      <header className="text-center bg-emerald-700 text-white py-12 mb-12">
        <h1 className="text-4xl font-semibold mb-4">Discover the World’s Best Shawls and Blankets</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We are a leading brand in both the online and offline markets, offering the finest shawls and blankets made from the highest quality materials.
        </p>
      </header>

      {/* Intro Section */}
      <section className="mb-12">
        <h2 className="text-3xl text-emerald-700 font-semibold mb-6">Our Legacy of Craftsmanship</h2>
        <p className="text-lg">
          For years, we have been perfecting the art of creating luxurious shawls and blankets, woven with love and tradition. Each piece is crafted to provide warmth, comfort, and elegance, making it not just a product, but an experience. We take pride in our heritage, and it reflects in the premium quality of our items.
        </p>
      </section>

      {/* Product Features Section */}
      <section className="mb-12">
        <h2 className="text-3xl text-emerald-700 font-semibold mb-6">Why Choose Our Shawls and Blankets?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl text-emerald-700 font-semibold mb-4">Unmatched Comfort</h3>
            <p className="text-gray-600">
              Our shawls and blankets are made with ultra-soft fabrics that ensure you feel cozy in any season. Perfect for winter evenings or as a stylish accessory.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl text-emerald-700 font-semibold mb-4">Exquisite Craftsmanship</h3>
            <p className="text-gray-600">
              Every stitch is carefully placed by skilled artisans, blending tradition and modern techniques. Each product is a work of art, designed to last for years.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl text-emerald-700 font-semibold mb-4">Eco-Friendly Materials</h3>
            <p className="text-gray-600">
              We are committed to sustainability. Our products are made using eco-friendly materials, ensuring that you get the best while caring for the planet.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl text-emerald-700 font-semibold mb-4">Elegance in Every Design</h3>
            <p className="text-gray-600">
              Our shawls and blankets come in a variety of sophisticated designs and colors, from rich, deep emeralds to subtle, calming tones that suit any occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Market Leadership Section */}
      <section className="mb-12">
        <h2 className="text-3xl text-emerald-700 font-semibold mb-6">We Are the Leaders in the Market</h2>
        <p className="text-lg">
          As a brand, we have earned a trusted name in the market both online and offline. Our commitment to quality, customer satisfaction, and timely delivery has made us the go-to choice for millions of customers worldwide. Our online presence allows customers to access our exclusive range of products with just a few clicks, while our offline network ensures a personal touch for those who prefer an in-store experience.
        </p>
        <p className="text-lg">
          Whether you are shopping for yourself or seeking the perfect gift, our wide selection caters to every need. We ensure that our customers receive nothing less than the best.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="mb-12">
        <h2 className="text-3xl text-emerald-700 font-semibold mb-6">What Our Customers Are Saying</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="italic text-lg text-gray-600">
              "I’ve never felt anything as soft and cozy as these blankets. I bought one for the winter season, and it has been my favorite ever since. The quality is amazing, and it keeps me warm without being too heavy."
            </p>
            <h4 className="mt-4 text-xl font-semibold">- Aditi S.</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="italic text-lg text-gray-600">
              "I love my shawl from this brand! It’s perfect for any occasion, from casual outings to formal events. The craftsmanship is second to none!"
            </p>
            <h4 className="mt-4 text-xl font-semibold">- Rajesh M.</h4>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-emerald-700 text-white py-12 mb-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Join the Family of Satisfied Customers</h2>
        <p className="text-lg mb-6">
          Don't miss out on the chance to experience the finest shawls and blankets. Shop with us today and discover the perfect blend of warmth, luxury, and tradition. Whether you're shopping online or visiting our store, we’re here to help you find the perfect piece for your home or wardrobe.
        </p>
        <button className="bg-white text-emerald-700 text-lg px-6 py-3 rounded-lg hover:bg-emerald-800 hover:text-white transition">
          Shop Now
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-800 text-white">
        <p>&copy; 2024 Best Shawls & Blankets. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Blog;