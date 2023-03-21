import React from 'react';
import PropTypes from 'prop-types';
import { AiFillStar } from 'react-icons/ai';
import { FaShippingFast } from 'react-icons/fa';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import Image from '../assets/react.svg';


const ItemBox = ({ title, price, image, rating, numReviews, inStock, fastShipping }) => {
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-md p-4">
                <div className="relative overflow-hidden aspect-ratio-1x1">
                    <Image src={image} alt={title} />
                </div>
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <div className="mt-2 flex items-center">
                        {Array.from(Array(5).keys()).map((i) => (
                            <AiFillStar key={i} className={`text-yellow-500 ${rating > i ? 'opacity-100' : 'opacity-25'}`} />
                        ))}
                        <span className="ml-2 text-gray-600">{numReviews} Reviews</span>
                    </div>
                    <div className="mt-2 font-medium text-gray-900">${price}</div>
                    <div className="mt-2 flex items-center">
                        {inStock && (
                            <IoMdCheckmarkCircleOutline className="text-green-500" />
                        )}
                        <span className={`ml-1 ${inStock ? 'text-gray-900' : 'text-red-500 font-semibold'}`}>
                            {inStock ? 'In stock' : 'Out of stock'}
                        </span>
                        {fastShipping && (
                            <FaShippingFast className="text-blue-500 ml-auto" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

ItemBox.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    numReviews: PropTypes.number.isRequired,
    inStock: PropTypes.bool.isRequired,
    fastShipping: PropTypes.bool.isRequired,
};

export default ItemBox;
