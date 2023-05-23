import React from "react";
import image from "../../assets/ramothy_night_balcony_1.jpg"

function Banner() {

    return (
        <div className='max-w-[1640px] mx-auto'>
            <div className='max-h-[500px] relative'>
                <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Ramothy</span></h1>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>The Awesome </span>Store</h1>
                </div>
                {/* sample random  banner image https://picsum.photos/1900/1800 */}
                <img className='w-full max-h-[500px] object-cover' src={image} alt="/" />
            </div>
        </div>
    )
}

export default Banner