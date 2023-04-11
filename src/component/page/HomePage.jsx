import React from "react";
import Banner from "../Banner";
import Navbar from "../Navbar";

function HomePage() {

    return (
        <div className="flex flex-col h-screen">
            <div className="w-full">
                <Banner />
            </div>
            <main className="flex-1">
                <div className="container mx-auto py-8 px-6">
                    <h1 className="text-4xl font-bold mb-4">Mothy Store</h1>
                    <p className="text-gray-700 mb-8">We sell some good stuff</p>
                    <div className="grid grid-cols-3 gap-6">

                        {/* The item box list was here, for now it just manual data dummy. API Fetch go after this */}
                        <div className="bg-white shadow rounded-lg overflow-hidden">
                            <img src="https://via.placeholder.com/400x400.png?text=Product+Image" alt="Product" className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h2 className="text-lg font-bold mb-2">Product Title</h2>
                                <p className="text-gray-700 mb-2">Product description goes here.</p>
                                <span className="text-gray-700 font-bold mr-8">Rp. 12.000</span>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
                            </div>
                        </div>

                        <div className="bg-white shadow rounded-lg overflow-hidden">
                            <img src="https://via.placeholder.com/400x400.png?text=Product+Image" alt="Product" className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h2 className="text-lg font-bold mb-2">Product Title</h2>
                                <p className="text-gray-700 mb-2">Product description goes here.</p>
                                <span className="text-gray-700 font-bold mr-8">Rp. 16.000</span>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
                            </div>
                        </div>
                        <div className="bg-white shadow rounded-lg overflow-hidden">
                            <img src="https://via.placeholder.com/400x400.png?text=Product+Image" alt="Product" className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h2 className="text-lg font-bold mb-2">Product Title</h2>
                                <p className="text-gray-700 mb-2">Product description goes here.</p>
                                <span className="text-gray-700 font-bold mr-8">Rp. 16.000</span>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
                            </div>
                        </div>
                        <div className="bg-white shadow rounded-lg overflow-hidden">
                            <img src="https://via.placeholder.com/400x400.png?text=Product+Image" alt="Product" className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h2 className="text-lg font-bold mb-2">Product Title</h2>
                                <p className="text-gray-700 mb-2">Product description goes here.</p>
                                <span className="text-gray-700 font-bold mr-8">Rp. 16.000</span>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
                            </div>
                        </div>


                    </div>
                </div>
            </main>
        </div>
    );

}

export default HomePage;