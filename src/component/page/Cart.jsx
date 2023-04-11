import React from "react";
import { AiOutlineDelete } from 'react-icons/ai';

function Cart() {

    return (
        <div className="container mx-auto py-8 px-6">
            <h1 className="text-3xl font-bold mb-4">Cart</h1>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-blue-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                                            Product Name
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                                            Quantity
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                                            Price
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                                            Total
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Remove</span>
                                        </th>
                                    </tr>
                                </thead>

                                {/* Table data goes here. Bellow just dummy data, please use API */}
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr className="bg-white hover:bg-gray-200">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img className="h-10 w-10 rounded-full" src="https://via.placeholder.com/400x400.png?text=Product+Image" alt="Product" />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">Product Title</div>
                                                    <div className="text-sm text-gray-500">Product Description</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">10</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">Rp. 20.000</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">Rp. 200.000</div>
                                            </div>
                                        </td>
                                        <td class="flex h-20 justify-center items-center">
                                            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex flex-row">
                                                <AiOutlineDelete class="mr-2 text-xl" />
                                                <span class="ml-1"> Delete </span>
                                            </button>
                                        </td>
                                    </tr>

                                    <tr className="bg-white hover:bg-gray-200">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img className="h-10 w-10 rounded-full" src="https://via.placeholder.com/400x400.png?text=Product+Image" alt="Product" />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">Product Title</div>
                                                    <div className="text-sm text-gray-500">Product Description</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">10</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">Rp. 20.000</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">Rp. 200.000</div>
                                            </div>
                                        </td>
                                        <td class="flex h-20 justify-center items-center">
                                            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex flex-row">
                                                <AiOutlineDelete class="mr-2 text-xl" />
                                                <span class="ml-1"> Delete </span>
                                            </button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Cart