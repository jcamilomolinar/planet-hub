import React from 'react'
import Image from 'next/image'

const SpaceImages = () => {
    return (
        <div className="grid grid-cols-2 gap-2 h-[50vh] w-full p-4">
            <div className="bg-black rounded-lg shadow-md overflow-hidden relative">
                <Image
                    src="/img1.png"
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="cover"
                    className='hover:opacity-80'
                />
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-2">
                <div className="bg-black rounded-lg shadow-md overflow-hidden relative">
                    <Image
                        src="/img2.png"
                        alt="Picture of the author"
                        layout="fill"
                        objectFit="cover"
                        className='hover:opacity-80'
                    />
                </div>
                <div className="bg-black rounded-lg shadow-md overflow-hidden relative">
                    <Image
                        src="/img3.png"
                        alt="Picture of the author"
                        layout="fill"
                        objectFit="cover"
                        className='hover:opacity-80'
                    />
                </div>
                <div className="bg-black rounded-lg shadow-md overflow-hidden relative">
                    <Image
                        src="/img4.png"
                        alt="Picture of the author"
                        layout="fill"
                        objectFit="cover"
                        className='hover:opacity-80'
                    />
                </div>
                <div className="bg-black rounded-lg shadow-md overflow-hidden relative">
                    <Image
                        src="/img5.png"
                        alt="Picture of the author"
                        layout="fill"
                        objectFit="cover"
                        className='hover:opacity-80'
                    />
                </div>
            </div>
        </div>
    )
}

export default SpaceImages