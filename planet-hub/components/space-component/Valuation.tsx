import React from 'react'
import { Progress } from "@/components/ui/progress"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import RatingComponent from './Rating';
import { FaStar, FaSprayCan, FaCheckCircle, FaKey, FaComments, FaMapMarkerAlt, FaTag } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { AccomodationsData } from './types';

// const averageRating = 4.9;
// const totalRatings = 8;
// const ratingsBreakdown = { 5: 7, 4: 1, 3: 0, 2: 0, 1: 0 };

// // Definición de tipos
// type Category = {
//     name: string;
//     rating: number;
//     icon: React.ReactElement<IconType>;
// };

// const categories: Category[] = [
//     { name: 'Limpieza', rating: 4.7, icon: <FaSprayCan className="text-blue-500 text-4xl" /> },
//     { name: 'Exactitud', rating: 4.8, icon: <FaCheckCircle className="text-green-500 text-4xl" /> },
//     { name: 'Check-in', rating: 4.8, icon: <FaKey className="text-yellow-500 text-4xl" /> },
//     { name: 'Comunicación', rating: 4.8, icon: <FaComments className="text-purple-500 text-4xl" /> },
//     { name: 'Ubicación', rating: 4.8, icon: <FaMapMarkerAlt className="text-red-500 text-4xl" /> },
//     { name: 'Precio', rating: 4.8, icon: <FaTag className="text-indigo-500 text-4xl" /> },

// ];

function Valuation({ fullDataV }: { fullDataV: AccomodationsData }) {
    return (
        <div>
            <div>
                <RatingComponent overallRating={4.7} categories={fullDataV.valuation.categories} />
            </div>

        </div>
    )
}

export default Valuation