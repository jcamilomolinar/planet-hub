import React from 'react';
import { AccommodationsCard } from '@/components/Accommodations/AccommodationsCard';
import Link from 'next/link';
import { accommodations_data } from '@/lib/data';


function Accomodation() {
    return (
        <div>
            <h1 className="text-textTitle text-5xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Search results</h1>
            <h2 className="text-xl text-muted-foreground my-5">These are the accommodations options we found for you!</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
                {accommodations_data.map(option => (
                    <Link href={`/accomodation/${option.id}`} key={option.id}>
                        <AccommodationsCard
                            accommodationName={option.accommodationName}
                            accommodationPhotos={option.accommodationPhotos}
                            accommodationStars={option.accommodationStars}
                            accommodationPrice={option.accommodationPrice}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Accomodation;