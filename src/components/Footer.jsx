import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 cormorant">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Coffee Export Co.</h3>
          <p className="mb-4">Bringing the finest coffee beans from farm to cup.</p>
          <address>
            <p>123 Coffee Lane, City, Country</p>
            <p>Phone: +123 456 7890</p>
            <p>Email: <a href="mailto:info@coffeeexportco.com" className="underline">info@coffeeexportco.com</a></p>
          </address>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul>
            <li><a href="/home" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
            <li><a href="/terms" className="hover:underline">Terms and Conditions</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <ul className=" flex flex-col  space-x-4">
            <li><a href="https://instagram.com/coffeeexportco" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><i className="fab fa-instagram"></i>Instagram </a></li>
            <li><a href="https://facebook.com/coffeeexportco" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><i className="fab fa-facebook"></i>Facebook </a></li>
            <li><a href="https://twitter.com/coffeeexportco" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><i className="fab fa-twitter"></i>Twitter </a></li>
            <li><a href="https://linkedin.com/company/coffeeexportco" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><i className="fab fa-linkedin"></i>Linkedin </a></li>
            <li><a href="https://youtube.com/channel/coffeeexportco" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><i className="fab fa-youtube"></i>Youtube </a></li>
          </ul>
        </div>

        {/* Newsletter Subscription Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h4>
          <form action="/subscribe" method="post" className="flex flex-col">
            <input type="email" name="email" placeholder="Enter your email" className="p-2 mb-4 rounded-md bg-white text-gray-800" required />
            <button type="submit" className="bg-green-500 text-white py-2 rounded-md hover:bg-yellow-400">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Copyright & Legal Section */}
      <div className="bg-gray-700 py-4 text-center text-sm mt-8">
        <p>&copy; 2025 Coffee Export Co. All Rights Reserved.</p>
        <p><a href="/privacy-policy" className="hover:underline">Privacy Policy</a> | <a href="/terms" className="hover:underline">Terms & Conditions</a></p>
      </div>
    </footer>
  );
}

export default Footer;
