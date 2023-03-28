import React from "react";

function Banner() {

    return (
        <div className='max-w-[1640px] mx-auto'>
        <div className='max-h-[500px] relative'>
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Ramothy</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>Dikeroyok</span> Div</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://picsum.photos/1900/1800" alt="/" />
        </div>
    </div>
    )
}

export default Banner