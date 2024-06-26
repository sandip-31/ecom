import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const cartItemsCount = cartItems.length;
    
    return (
        <nav className="bg-gradient-to-r from-[#fab3b4] to-[#ccdde9] sticky top-0 shadow-md">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex justify-between items-center py-3">
                    {/* Logo / Brand */}
                    <div className="flex items-center">
                        <Link to="/" className="text-gray-800 text-2xl font-bold">
                            E-COM
                        </Link>
                    </div>

                    {/* Right section with profile icon and cart */}
                    <div className="flex items-center space-x-6">
                        {/* Profile icon */}
                        <Link to="/" className="text-gray-800">
                            <FaUserCircle className="text-3xl" />
                        </Link>

                        {/* Cart icon with count */}
                        <Link to="/cart" className="relative text-gray-800">
                            <FaShoppingCart className="text-3xl" />
                            {/* Cart count */}
                            {cartItemsCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                                    {cartItemsCount}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
