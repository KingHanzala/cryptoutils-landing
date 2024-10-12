import React from 'react';
import logo from "../assets/logo.png";
export const Header: React.FC = () => {
    return (
        <div className="navbar bg-base-200">
            <div className="flex-1">
                <a href="https://cryptoutils.xyz/" className="flex items-center">
                    <img
                        src={logo}
                        className="mr-3 h-6 sm:h-9"
                        alt="CryptoUtils Logo"
                    />
                </a>
                <a className="btn btn-ghost text-xl">Cryptoutils</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li><a href="#">Home</a></li>
                <li><a href="#initiatives">Initiatives</a></li>
                <li><a href="#contact-us">Contact Us</a></li>
                </ul>
            </div>
        </div>
    );
};
