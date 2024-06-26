import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#fab3b4] to-[#ccdde9] text-gray-800 body-font">
            <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
                {/* Logo */}
                <Link to="/" className="flex items-center md:justify-start justify-center text-gray-800">
                    <span className="text-xl font-bold">E-COM</span>
                </Link>

                {/* Copyright and Link */}
                <p className="text-gray-800 text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    © 2024 E-COM 
                </p>
                
                {/* Social Media Icons */}
                <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    {/* Facebook */}
                    <a href="https://www.facebook.com/example" className="text-gray-800 cursor-pointer">
                        <FaFacebook className="w-5 h-5" />
                    </a>

                    {/* Twitter */}
                    <a href="https://www.twitter.com/example" className="ml-3 text-gray-800 cursor-pointer">
                        <FaTwitter className="w-5 h-5" />
                    </a>

                    {/* Instagram */}
                    <a href="https://www.instagram.com/example" className="ml-3 text-gray-800 cursor-pointer">
                        <FaInstagram className="w-5 h-5" />
                    </a>

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/example" className="ml-3 text-gray-800 cursor-pointer">
                        <FaLinkedin className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
