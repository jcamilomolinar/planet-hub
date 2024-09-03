import React from 'react'
import RatingComponent from './Rating';
import { AccomodationsData } from './types';

function Valuation({ fullDataV }: { fullDataV: AccomodationsData }) {
    return (
        <div>
            <div>
                <RatingComponent overallRating={fullDataV.valuation.averageRating} categories={fullDataV.valuation.categories} />
            </div>

        </div>
    )
}

export default Valuation