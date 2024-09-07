"use client";

import * as React from "react"
import Image, { StaticImageData } from "next/image"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import Link from 'next/link'

export function PlanetCard({planetName, planetPhoto, description }: {planetName: string, planetPhoto: StaticImageData, description: string }) {

  const handleClickFlights = () => {
    localStorage.setItem("planetName", planetName);
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Card className="w-1/5 shadow-2xl bg-white rounded-xl p-3 m-4 shadow-palleteOrangeVariant hover:scale-105 duration-200 ease-in-out">
            <CardHeader className="flex items-center flex-row gap-5">
                <CardTitle className="text-textTitle">{planetName}</CardTitle>
            </CardHeader>
            <CardContent className="text-textAll">
                <Image src={planetPhoto} width={250} height={250} alt='PlanetHub App Logo' />
            </CardContent>
            <CardFooter className="text-muted-foreground">
                <p>Click to see details!</p>
            </CardFooter>
        </Card>
      </DrawerTrigger>

      <DrawerContent>
        <div className="w-3/4 mx-auto flex flex-col items-center">
          <DrawerHeader>
            <DrawerTitle className="text-textTitle text-4xl drop-shadow-[0_1.2px_1.2px_rgba(155,155,155,0.8)]">{planetName}</DrawerTitle>
          </DrawerHeader>

          <div className="flex items-center gap-10">
            <Image className="shadow-2xl bg-white rounded-xl p-3 m-4 shadow-palleteOrangeVariant hover:scale-105 duration-200 ease-in-out" src={planetPhoto} width={250} height={250} alt='PlanetHub App Logo' />
            <p>{description}</p>
          </div>

          <DrawerFooter className="flex flex-row">
            <Button onClick={handleClickFlights} variant="outline">
              <Link href='/flights'>View flights 🚀</Link>
            </Button>
            <Button variant="outline">
              <Link href='/accomodation'>View accomodations 🏨</Link>
            </Button>
            <DrawerClose asChild>
              <Button variant="destructive">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
