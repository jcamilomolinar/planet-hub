import * as React from "react"
import { AccomodationsData } from './types';
import Link from "next/link";

export default function SpaceTitle({ data }: { data: AccomodationsData }) {
    return (
        <div className='flex justify-between items-center p-4  '>
            {/* Title Div */}
            <div>
                <p className='text-textTitle text-4xl font-bold '>{data.name}</p>
            </div>

            {/* Div compartir, megusta */}
            <div className='flex justify-normal gap-4 '>
                {/* Div compartir */}
                <div>
                    <Link href="/" className="hover:bg-gray-200 rounded-full p-2">🔗 Share</Link>
                </div>
                {/* Div me gusta */}
                <div>
                    <Link href="/" className="hover:bg-gray-200 rounded-full p-2">❤️ Like</Link>
                </div>
            </div>
        </div>
    )
}