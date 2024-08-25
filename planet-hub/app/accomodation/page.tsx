import React from 'react';
import { AccommodationsCard } from '@/components/Accommodations/AccommodationsCard';
import PlanetPhoto from "@/public/planet.jpg";



const accommodationsOptions = [
    {
        id: 1,
        accommodationName: "Accomodation 3",
        accommodationStars: 4.5,
        accommodationPhotos: [PlanetPhoto, PlanetPhoto, PlanetPhoto],
        accommodationPrice: "3.000.000"

    },
    {
        id: 2,
        accommodationName: "Accomodation2",
        accommodationStars: 4.1,
        accommodationPhotos: [PlanetPhoto, PlanetPhoto],
        accommodationPrice: "3.300.000"
    },
    {
        id: 3,
        accommodationName: "Accomodation3",
        accommodationStars: 4.1,
        accommodationPhotos: [PlanetPhoto],
        accommodationPrice: "3.540.000"
    },
    {
        id: 4,
        accommodationName: "Accomodation4",
        accommodationStars: 5.0,
        accommodationPhotos: [PlanetPhoto, PlanetPhoto, PlanetPhoto],
        accommodationPrice: "1.000.000"
    },
    {
        id: 5,
        accommodationName: "Accomodation5",
        accommodationStars: 4.7,
        accommodationPhotos: [PlanetPhoto, PlanetPhoto],
        accommodationPrice: "3.000.000"
    },
    {
        id: 6,
        accommodationName: "Accomodation6",
        accommodationStars: 4.9,
        accommodationPhotos: [PlanetPhoto, PlanetPhoto],
        accommodationPrice: "2.100.000"
    },
];


function Accomodation() {
    return (
        <div>
            <h1 className="text-textTitle text-5xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Search results</h1>
            <h2 className="text-xl text-muted-foreground my-5">These are the accommodations options we found for you!</h2>

            <div className="grid grid-cols-3 gap-4">
                {accommodationsOptions.map(option => (
                    <AccommodationsCard
                        key={option.id}
                        accommodationName={option.accommodationName}
                        accommodationPhotos={option.accommodationPhotos}
                        accommodationStars={option.accommodationStars}
                        accommodationPrice={option.accommodationPrice}
                    />
                ))}
            </div>
        </div>
    );
}

export default Accomodation;
