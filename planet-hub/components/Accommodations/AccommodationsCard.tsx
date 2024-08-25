import * as React from "react";
import Image, { StaticImageData } from "next/image";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface AccommodationsCardProps {
    accommodationName: string;
    accommodationPhotos: StaticImageData[];
    accommodationStars: number;
    accommodationPrice: string;
}


export function AccommodationsCard({ accommodationName, accommodationPhotos, accommodationStars, accommodationPrice }: AccommodationsCardProps) {
    return (
        <Card className="w-2x1 shadow-2xl bg-white rounded-xl p-3 m-4 shadow-palleteOrangeVariant hover:scale-105 duration-200 ease-in-out">
            <CardHeader className="flex items-center flex-row gap-5">
                <CardTitle className="text-textTitle flex justify-between w-full">
                    <p>{accommodationName}</p>
                    <section className="flex justify-between text-base items-center">
                        <p className="text-palleteOrange">
                            {accommodationStars}
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faStar} style={{ color: '#d46a17', fontSize: '24px' }} className="w-6 h-6" />
                        </p>
                    </section>
                </CardTitle>
            </CardHeader>
            <CardContent className="text-textAll">
                <Carousel>
                    <CarouselContent>
                        {accommodationPhotos.map((photo, index) => (
                            <CarouselItem key={index}>
                                <Image
                                    src={photo}
                                    width={250}
                                    height={250}
                                    alt={`Image ${index + 1} of ${accommodationName}`}
                                    layout="responsive"
                                    className="object-cover w-full h-full"
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </CardContent>
            <CardFooter className="text-muted-foreground">
                <section className="flex justify-between w-full items-center">
                    <p> $ {accommodationPrice} MP night</p>
                    <p className="bg-green-700 text-blue-50 p-2 rounded-lg">Available</p>
                </section>
            </CardFooter>
        </Card>
    )
}
