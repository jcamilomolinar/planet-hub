import * as React from "react"
import { AccomodationsData } from './types';

export default function SpaceTitle({ data }: { data: AccomodationsData }) {
    return (
        <div className='flex justify-between items-center p-4  '>
            {/* Title Div */}
            <div>
                <p className='text-textTitle text-4xl font-bold '>{data.name}</p>
            </div>

            {/* Div compartir, megusta */}
            <div className='flex justify-normal gap-4'>
                {/* Div compartir */}
                <div>
                    🔗 Compartir
                </div>
                {/* Div megusta */}
                <div>
                    ❤️ Me gusta
                </div>
            </div>
        </div>
    )
}