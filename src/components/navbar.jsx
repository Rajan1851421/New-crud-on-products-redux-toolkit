import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearTokenLogin } from '../features/productSlice';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const {Token_login,cart,orders} = useSelector(state => state.app);

  const toggleNavbar = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleLogout = () => {
    dispatch(clearTokenLogin());
    navigate('/login');
    setIsOpen(false); // Close the navbar after logout
  };

  const handleMenuItemClick = () => {
    setIsOpen(false); // Close the navbar after clicking a menu item
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
            <Link to="/order" onClick={handleMenuItemClick} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Order</Link>

              <Link to="/myorder" onClick={handleMenuItemClick} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 
              rounded-md text-sm font-medium">My Order
               <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                {orders.length}
              </span>
              </Link>
              <Link to="/shopping" onClick={handleMenuItemClick} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Shopping</Link>
              <Link to="/about" onClick={handleMenuItemClick} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to="/service" onClick={handleMenuItemClick} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</Link>
              <Link to="/service" onClick={handleMenuItemClick} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</Link>
              <Link to="/cart" onClick={handleMenuItemClick} className="text-gray-300 mx-2 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Cart
              <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                {cart.length}
              </span>
              </Link>
              {Token_login ? (
                <Link to="" onClick={handleLogout} className="text-gray-300 bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm border font-medium">Logout</Link>
              ) : (
                <Link to="/" onClick={handleMenuItemClick} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm border font-medium">Login</Link>
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
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-2`}>
          <div className="flex flex-col items-end">
            <Link to="/myorder" onClick={handleMenuItemClick} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My Order</Link>
            <Link to="/order" onClick={handleMenuItemClick} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"> Order</Link>
            <Link to="/shopping" onClick={handleMenuItemClick} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Shopping</Link>
            <Link to="/about" onClick={handleMenuItemClick} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
            <Link to="/service" onClick={handleMenuItemClick} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</Link>

            

            <Link to="/contact" onClick={handleMenuItemClick} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            <Link to="/cart" onClick={handleMenuItemClick} className="text-gray-300 mx-2 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Cart
            <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                {cart.length}
              </span>
            </Link>
            {Token_login ? (
              <Link to="/logout" onClick={handleLogout} className="text-gray-300 bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm border font-medium">Logout</Link>
            ) : (
              <Link to="/" onClick={handleMenuItemClick} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm border font-medium">Login</Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
