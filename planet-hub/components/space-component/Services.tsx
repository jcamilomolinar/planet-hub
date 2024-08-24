import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSwimmer } from '@fortawesome/free-solid-svg-icons';
import { faTaxi, faSnowflake, faGlobe, faClock } from '@fortawesome/free-solid-svg-icons';

const servicesData = [
    {
        id: 1,
        title: "Piscina al aire libre",
        description: "",
        imageUrl: "/img1.png",
        icon: faSwimmer
    },
    {
        id: 2,
        title: "Traslado aeropuerto",
        description: "",
        imageUrl: "/img2.png",
        icon: faTaxi
    },
    {
        id: 3,
        title: "Aire acondicionado",
        description: "",
        imageUrl: "/img3.png",
        icon: faSnowflake
    },
    {
        id: 4,
        title: "Gastronomía Interplanetaria",
        description: "",
        imageUrl: "/img3.png",
        icon: faGlobe
    },
    {
        id: 5,
        title: "Recepción 24 horas",
        description: "",
        imageUrl: "/img3.png",
        icon: faClock
    }
];

function Services() {
    return (
        <div className="container mx-auto py-8 flex flex-wrap justify-center gap-8">
            {servicesData.map((service) => (
                <div key={service.id} className="flex flex-col items-center w-full md:w-1/2 lg:w-1/3 mb-8">
                    <div className="flex flex-col items-center mb-4">
                        <div className="flex justify-center mb-2">
                        </div>
                        <FontAwesomeIcon icon={service.icon} style={{ color: '#d46a17', fontSize: '2px', SizeIcon: '2px' }} className="w-6" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-lg font-semibold mb-2">{service.title}</h2>
                        {/* <p className="text-sm">{service.description}</p> */}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Services
