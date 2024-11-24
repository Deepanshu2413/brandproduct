import React from 'react'

function Footer() {
  return (
    <>
        <footer className="bg-emerald-700 text-white py-12 mt-12">
  <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
    {/* Brand Information */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">Best Shawls & Blankets</h3>
      <p className="text-lg">
        Leading the way in luxury shawls and blankets. We deliver quality and
        comfort to our customers around the world.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
      <ul className="space-y-2">
        <li><a href="#" className="text-lg hover:text-emerald-300">Home</a></li>
        <li><a href="#" className="text-lg hover:text-emerald-300">Shop</a></li>
        <li><a href="#" className="text-lg hover:text-emerald-300">About Us</a></li>
        <li><a href="#" className="text-lg hover:text-emerald-300">Contact</a></li>
      </ul>
    </div>

    {/* Customer Service */}
    <div>
      <h4 className="text-xl font-semibold mb-4">Customer Service</h4>
      <ul className="space-y-2">
        <li><a href="#" className="text-lg hover:text-emerald-300">FAQ</a></li>
        <li><a href="#" className="text-lg hover:text-emerald-300">Returns</a></li>
        <li><a href="#" className="text-lg hover:text-emerald-300">Shipping Information</a></li>
        <li><a href="#" className="text-lg hover:text-emerald-300">Privacy Policy</a></li>
      </ul>
    </div>

    {/* Social Media Links */}
    <div>
      <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
      <div className="flex space-x-6">
        <a href="#" className="text-emerald-300 hover:text-white">
          <i className="fab fa-facebook-f text-2xl"></i>
        </a>
        <a href="#" className="text-emerald-300 hover:text-white">
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a href="#" className="text-emerald-300 hover:text-white">
          <i className="fab fa-instagram text-2xl"></i>
        </a>
        <a href="#" className="text-emerald-300 hover:text-white">
          <i className="fab fa-youtube text-2xl"></i>
        </a>
      </div>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="text-center text-lg mt-8">
    <p>&copy; 2024 Best Shawls & Blankets. All Rights Reserved By Deepanshu Kumar.</p>
  </div>
</footer>


    </>
  )
}

export default Footer