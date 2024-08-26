import React from 'react'
import Image from 'next/image'
import { HostData } from './types'

interface SpaceHostProps {
    host: HostData;
}

export default function SpaceHost({ host }: SpaceHostProps) {
    return (
        <div className="container mx-auto p-4 m-4 rounded-md border-solid border-2 --textTitle">
            <div className="flex flex-row justify-center">
                <div className="flex flex-row gap-4 items-center">
                    <div className="flex items-center justify-center">
                        <Image
                            src={host.avatar}
                            alt={`${host.name}'s avatar`}
                            width={124}
                            height={124}
                            className="rounded-full"
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center text-center p-4'>
                        <h1 className="text-lg font-semibold">Host: {host.name}</h1>
                        <p className="text-sm">Joined in {host.joinedYear}</p>
                        <p className="text-sm">{host.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}