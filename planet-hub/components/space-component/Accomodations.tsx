"use client";
import React from 'react'
import SpaceTitle from "@/components/space-component/SpaceTitle";
import SpaceImages from "@/components/space-component/SpaceImages";
import SpaceMoreInformation from "@/components/space-component/SpaceMoreInformation";
import { AccomodationsProps } from './types';

function Accomodations({ data }: AccomodationsProps) {
    if (data.length === 0) {
        return <div>No accommodation data available</div>;
    }

    const accommodation = data[0]; // Since we're dealing with a single accommodation
    return (
        <div>
            <SpaceTitle data={accommodation} />
            <SpaceImages images={accommodation.imageUrls} />
            <SpaceMoreInformation fullData={accommodation} />
        </div>
    )
}

export default Accomodations