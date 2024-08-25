import React from 'react'
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image'

export default function SpaceHost() {
    return (
        <div className="container mx-auto p-4 m-4 rounded-md border-solid border-2 --textTitle">
            <div className="flex flex-row justify-center">
                <div className="flex flex-row gap-4 items-center">
                    <div className="flex items-center justify-center">
                        {/* <img src="/img1.png" alt="host" className="rounded-full h-32 w-32" /> */}
                        <Image
                            src="/img1.png"
                            alt="host"
                            width={124}
                            height={124}
                            className="rounded-full"
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center text-center p-4'>
                        <h1 className="text-lg font-semibold">Host : Daniel Silva</h1>
                        <p className="text-sm">Joined in 2021</p>
                        <p className="text-sm">correo@correo.com</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
