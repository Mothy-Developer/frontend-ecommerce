import React from 'react';
import dummyIcon from '../assets/react.svg';

function Navbar() {


    return (
        <nav className="bg-white border-b-2 border-black">
            <div className="max-w-12xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <img className="h-8 pr-0" src={dummyIcon} alt="Logo" />
                    </div>

                    <div className="flex">
                        <div className="hidden md:flex md:items-center md:ml-6">
                            <a href="#" className="px-3 py-2 text-gray-800 hover:text-gray-600 font-bold">Login</a>
                            <a href="#" className="px-3 py-2 text-gray-800 hover:text-gray-600 font-bold">Signup</a>
                            <button className="ml-4">
                                <svg className="h-6 w-6 text-gray-800 hover:text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 3h2.667l2.364 10.547c.155.7.812 1.206 1.542 1.206h10.895l-1.245 5.94-1.422 1.422h-9.34c-1.067 0-2.04-.587-2.546-1.533L2.28 6.12C1.99 5.445 2 4.664 2.327 3.992A3.002 3.002 0 015.06 2h10.37l2.347 2.347 1.414-1.414L5.707 0 3 2.707V3z" fill="currentColor" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex md:hidden">
                            <button className="hamburger-icon">
                                <svg className="h-6 w-6 text-gray-800 hover:text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;