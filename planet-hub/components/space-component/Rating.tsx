import React from 'react';
import { FaStar, FaSprayCan, FaCheckCircle, FaKey, FaComments, FaMapMarkerAlt, FaTag } from 'react-icons/fa';
import { IconType } from 'react-icons';

// Definición de tipos
type Category = {
    name: string;
    rating: number;
    icon: React.ReactElement<IconType>;
};

type RatingComponentProps = {
    overallRating: number;
    categories: Category[];
};

const RatingComponent: React.FC<RatingComponentProps> = ({ overallRating, categories }) => {
    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }).map((_, index) => (
            <FaStar
                key={index}
                className={`${index < Math.floor(rating) ? 'text-palleteOrange' : 'text-gray-300'
                    } inline-block`}
            />
        ));
    };

    return (
        <div className="mx-auto p-4 bg-white shadow-lg rounded-lg">
            <div className="mb-4">
                <h2 className="text-xl font-semibold">Valoración</h2>
                <div className="flex items-center">
                    <span className="text-3xl font-bold mr-2">{overallRating}</span>
                    <div>{renderStars(overallRating)}</div>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {categories.map((category) => (
                    <div key={category.name} className="flex items-center">
                        {category.icon}
                        <div className="ml-2">
                            <p className="text-sm font-medium">{category.name}</p>
                            <p className="text-lg font-semibold">{category.rating}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};



export default RatingComponent;