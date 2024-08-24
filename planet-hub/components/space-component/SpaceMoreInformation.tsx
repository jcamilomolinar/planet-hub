import React from 'react'
import SpaceCard from './SpaceCard';
import SpaceHost from './SpaceHost';

function SpaceMoreInformation() {
    return (

        <div className='flex justify-normal w-auto h-auto gap-3'>
            {/* Mas informacion del lugar  */}
            <div className='flex-1'>
                <SpaceCard />

            </div>
            {/* Información del anfitrion */}
            <div className='flex-1'>
                <SpaceHost />
            </div>


        </div>
    )
}

export default SpaceMoreInformation
