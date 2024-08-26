import React from 'react';
import Accommodations from '@/components/space-component/Accomodations';
import { AccomodationsData } from '@/components/space-component/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSwimmer, faTaxi, faSnowflake, faGlobe, faClock } from '@fortawesome/free-solid-svg-icons';
import { FaStar, FaSprayCan, FaCheckCircle, FaKey, FaComments, FaMapMarkerAlt, FaTag } from 'react-icons/fa';

// Importa los datos de alojamiento desde el archivo de la página principal
import { accommodationsData } from '../page';

function getAccommodationData(id: string): AccomodationsData | undefined {
    return accommodationsData.find(accommodation => accommodation.id === parseInt(id));
}

function AccommodationDetail({ params }: { params: { id: string } }) {
    const data = getAccommodationData(params.id);

    if (!data) {
        return <div>Alojamiento no encontrado</div>;
    }

    return (
        <div>
            <Accommodations data={data} />
        </div>
    );
}

export default AccommodationDetail;