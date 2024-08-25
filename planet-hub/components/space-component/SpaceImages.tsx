import React from 'react';
import Image from 'next/image';

interface SpaceImagesProps {
    images: string[];
}

const SpaceImages: React.FC<SpaceImagesProps> = ({ images }) => {
    return (
        <div className="grid grid-cols-2 gap-2 h-[50vh] w-full p-4">
            <div className="bg-black rounded-lg shadow-md overflow-hidden relative">
                <Image
                    src={images[0]}
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="cover"
                    className='hover:opacity-80'
                />
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-2">
                {images.slice(1).map((image, index) => (
                    <div key={index} className="bg-black rounded-lg shadow-md overflow-hidden relative">
                        <Image
                            src={image}
                            alt={`Image ${index + 2}`}
                            layout="fill"
                            objectFit="cover"
                            className='hover:opacity-80'
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SpaceImages;
