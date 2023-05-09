import { Link } from "react-router-dom";


function ItemCard() {

    return (

        <div className="bg-white shadow rounded-lg overflow-hidden">
            <Link to="/detail">
                <img src="https://via.placeholder.com/400x400.png?text=Product+Image" alt="Product" className="w-full h-64 object-cover" />
            </Link>
            <div className="p-4">
                <h2 className="text-lg font-bold mb-2">Product Title</h2>
                <p className="text-gray-700 mb-2">Product description goes here.</p>
                <span className="text-gray-700 font-bold mr-8">Rp. 12.000</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
            </div>
        </div>
    )
}

export default ItemCard