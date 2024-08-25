import React from 'react'
import SpaceCard from './SpaceCard';
import SpaceHost from './SpaceHost';
import { Separator } from "@/components/ui/separator"
import Services from './Services'
import Valuation from './Valuation';
import { OpinionCard } from "@/components/OpinionCard";
import { AccomodationsData } from './types';

function SpaceMoreInformation({ fullData }: { fullData: AccomodationsData }) {
    return (
        <div className='flex flex-col lg:flex-row justify-normal w-full h-auto gap-3'>
            {/* More information about the place */}
            <div className='flex-grow lg:w-2/3'>
                <SpaceCard fullDataSC={fullData} />

                <Separator className="my-7" />

                {/* Services offered */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Services</h2>
                    <Services fullDataS={fullData} />
                </div>

                <Separator className="my-7" />

                {/* Valuation */}
                <Valuation fullDataV={fullData} />

                {/* Opinions */}
                <div className="w-full mt-10">
                    <h2 className="text-2xl font-semibold mb-4">Opinions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <OpinionCard name="C. M. Zapatus" user="requirements4life" date="8:21 PM / Dec 21, 2022">
                            Great experience at Endor, definitely worth going to play with the lovable Ewoks.
                        </OpinionCard>
                        <OpinionCard name="Darth Vader" user="iamyourfather" date="4:21 PM / Oct 7, 2021">
                            The hotel I stayed at in Mos Eisley is highly recommended, the food was fantastic and the service was excellent. There are also many activities to do in Tatooine.
                        </OpinionCard>
                        <OpinionCard name="Luke Skywalker" user="forceiswithme" date="6:55 AM / Jan 15, 2021">
                            I had a great time during my stay in Naboo, I enjoyed the water world known for its beauty and its capital Theed.
                        </OpinionCard>
                    </div>
                </div>
            </div>

            {/* Host information */}

            <div className='lg:w-1/3 mt-6 lg:mt-0'>
                <SpaceHost />
            </div>
        </div>
    )
}

export default SpaceMoreInformation