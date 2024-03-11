import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearTokenLogin } from '../features/productSlice';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const Token_login = useSelector(state => state.app.Token_login);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(clearTokenLogin());
    navigate('/login');
  };

  return (
    <div className='fixed top-0 w-full z-10'>
      <nav className="bg-gray-800 p-4 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex items-center">
              <span className="text-white text-xl font-semibold">Rajan Prajapati</span>
            </div>
            <div className="hidden md:flex items-center">
              <Link to="/shopping" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Shopping</Link>
              <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to="/service" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</Link>
              <Link to="/contactus" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              {Token_login ? (
                <Link to="" onClick={handleLogout} className="text-gray-300 bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm border font-medium">Logout</Link>
              ) : (
                <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm border font-medium">Login</Link>
              )}
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleNavbar} className="outline-none mobile-menu-button">
                <svg className="w-6 h-6 text-white hover:text-gray-300"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-2 ease-in-out ">
            <Link to="/shopping" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Shopping</Link>
            <Link to="/about" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link to="/service" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Services</Link>
            <Link to="/contact" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            {Token_login ? (
              <Link to="/logout" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Logout</Link>
            ) : (
              <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm border font-medium">Login</Link>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
