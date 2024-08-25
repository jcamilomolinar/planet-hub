import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSwimmer, faTaxi, faSnowflake, faGlobe, faClock } from '@fortawesome/free-solid-svg-icons';
import { AccomodationsData } from './types';

// const servicesData = [
//     {
//         id: 1,
//         title: "Piscina al aire libre",
//         description: "",
//         imageUrl: "/img1.png",
//         icon: faSwimmer
//     },
//     {
//         id: 2,
//         title: "Traslado aeropuerto",
//         description: "",
//         imageUrl: "/img2.png",
//         icon: faTaxi
//     },
//     {
//         id: 3,
//         title: "Aire acondicionado",
//         description: "",
//         imageUrl: "/img3.png",
//         icon: faSnowflake
//     },
//     {
//         id: 4,
//         title: "Gastronomía Interplanetaria",
//         description: "",
//         imageUrl: "/img3.png",
//         icon: faGlobe
//     },
//     {
//         id: 5,
//         title: "Recepción 24 horas",
//         description: "",
//         imageUrl: "/img3.png",
//         icon: faClock
//     }
// ];

function Services({ fullDataS }: { fullDataS: AccomodationsData }) {
    return (
        <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {fullDataS.services.map((service) => (
                <div key={service.id} className="flex flex-col items-center">
                    <div className="flex items-center justify-center mb-4">
                        <FontAwesomeIcon icon={service.icon} style={{ color: '#d46a17', fontSize: '24px' }} className="w-6 h-6 mr-2" />
                        <h2 className="text-sm font-semibold">{service.title}</h2>
                    </div>
                    {/* <p className="text-sm text-center">{service.description}</p> */}
                </div>
            ))}
        </div>
    )
}

export default Services;
