import React from 'react';
import logo from "../assets/logo.png";

export const Header: React.FC = () => {
    return (
        <header className=" bg-transparent shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
                <a href="https://cryptoutils.xyz/" className="flex items-center space-x-3">
                    <img
                        src={logo}
                        className="h-8 sm:h-9"
                        alt="CryptoUtils Logo"
                    />
                    <span className="text-xl font-semibold text-gray-900 dark:text-white whitespace-nowrap">CryptoUtils</span>
                </a>
                <div className="hidden md:flex items-center space-x-6">
                    <a href="#" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition duration-150 ease-in-out">Home</a>
                    <a href="#initiatives" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition duration-150 ease-in-out">Initiatives</a>
                    <a href="#contact-us" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition duration-150 ease-in-out">Contact Us</a>
                    <a
                        href="https://docs.cryptoutils.xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 transition duration-300 ease-in-out"
                    >
                        Docs
                    </a>
                </div>
                <div className="md:hidden">
                </div>
            </nav>
        </header>
    );
};
