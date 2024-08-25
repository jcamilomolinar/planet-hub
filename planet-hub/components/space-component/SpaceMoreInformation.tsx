import React from 'react'
import SpaceCard from './SpaceCard';
import SpaceHost from './SpaceHost';
import { Separator } from "@/components/ui/separator"
import Services from './Services'
import Valuation from './Valuation';

function SpaceMoreInformation() {
    return (

        <div className='flex justify-normal w-auto h-auto gap-3'>
            {/* Mas informacion del lugar  */}
            <div className='flex-2'>
                <SpaceCard />

                {/* Separador */}
                <Separator className="my-7" />

                {/* Servicios ofrecidos */}
                <div className=''>
                    <h1 className="text-2xl font-semibold">Services</h1>
                    <Services />
                </div>

                {/* Separador */}
                <Separator className="my-7" />

                {/* Valoration */}

                <Valuation />

            </div>
            {/* Información del anfitrion */}
            <div className='flex-1'>
                <SpaceHost />
            </div>


        </div>
    )
}

export default SpaceMoreInformation
