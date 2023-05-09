import React from "react";

function DetailProduct() {

    return (
        <div className="container mx-auto py-8 px-6  ">
            <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 px-4">
                    <img src="https://picsum.photos/1900/1800" alt="Product" className="w-full h-64 object-cover rounded-lg shadow-md" />
                </div>
                <div className="w-full md:w-1/2 px-4">
                    <h1 className="text-3xl font-bold mb-2">Product Title</h1>
                    <span className="text-gray-700 font-bold mb-4">Rp. 16.000</span>
                    <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quos alias nulla veritatis eum soluta velit eius nihil facilis asperiores doloribus quidem consequuntur, a repellat ut! Suscipit vitae accusantium iusto.</p>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="quantity">
                                Quantity
                            </label>
                            <input className="shadow appearance-none border rounded w-16 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="number" placeholder="1" />
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                            Add to Cart
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default DetailProduct