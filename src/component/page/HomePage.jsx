import React from "react";
import Banner from "../Banner";
// import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import ItemCard from "../item component/ItemCard";

function HomePage() {

    const items = Array.from({ length: 10 }).map((_, index) => {
        return <ItemCard key={index} />;
    });

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
                        {/* call the items  */}
                        {items}
                    </div>
                </div>
            </main>
        </div>
    );

}

export default HomePage;