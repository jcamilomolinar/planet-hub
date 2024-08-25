"use client";
import React from 'react'
import SpaceTitle from "@/components/space-component/SpaceTitle";
import SpaceImages from "@/components/space-component/SpaceImages";
import SpaceMoreInformation from "@/components/space-component/SpaceMoreInformation";
import { AccomodationsProps } from './types';

function Accomodations({ data }: AccomodationsProps) {
    return (
        <div>
            <SpaceTitle data={data} />
            <SpaceImages images={data.imageUrls} />
            <SpaceMoreInformation fullData={data} />
        </div>
    )
}

export default Accomodations