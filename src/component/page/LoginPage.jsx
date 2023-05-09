import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Navbar from "../Navbar";


export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: add logic to handle form submission
    };

    return (
        <div className="flex flex-col h-screen">
            <Navbar/>
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Selamat Datang Warga Mothy
                        </h2>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-8">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="appearance-none border border-gray-300 rounded-md py-2 px-4 mb-3 leading-tight focus:outline-none focus:shadow-outline w-full"
                                placeholder="Email address"
                            />
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="appearance-none border border-gray-300 rounded-md py-2 px-4 mb-3 leading-tight focus:outline-none focus:shadow-outline w-full"
                                placeholder="Password"
                            />
                        </div>
                        <div className="mt-6">
                            <Link to="/home">
                                <button
                                    type="submit"
                                    // onClick={handleClick}
                                    className="py-2 px-4 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 text-white rounded-md w-full"
                                >
                                    Masuk
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}
