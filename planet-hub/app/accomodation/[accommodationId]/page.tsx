import React from 'react'
import Accomodations from '@/components/space-component/Accomodations';
import { AccomodationsData } from '@/components/space-component/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSwimmer, faTaxi, faSnowflake, faGlobe, faClock, faSnowplow } from '@fortawesome/free-solid-svg-icons';
import { FaStar, FaSprayCan, FaCheckCircle, FaKey, FaComments, FaMapMarkerAlt, FaTag } from 'react-icons/fa';
import NotFound from '@/app/not-found';
import { accommodations } from '@/lib/data';


type Params = {
    accommodationId: string;
};


function AccommodationPage({ params }: { params: Params }) {
    const accommodationId = parseInt(params.accommodationId, 10);
    const selectedAccommodation = accommodations.find(acc => acc.id === accommodationId);

    if (!selectedAccommodation) {
        return <NotFound />;
    }

    return (
        <div>
            <Accomodations data={[selectedAccommodation]} />
        </div>
    );
}

export default AccommodationPage