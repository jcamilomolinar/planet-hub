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
        <Card className="w-full shadow-2xl bg-white rounded-xl p-3 m-4 shadow-palleteOrangeVariant hover:scale-105 duration-200 ease-in-out">
            <CardHeader className="flex items-center flex-col sm:flex-row gap-2 sm:gap-5">
                <CardTitle className="text-textTitle flex flex-col sm:flex-row justify-between w-full items-center">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center sm:text-left mb-2 sm:mb-0 truncate overflow-hidden">{accommodationName}</p>
                    <section className="flex justify-between text-sm sm:text-base items-center whitespace-nowrap">
                        <p className="text-palleteOrange mr-1">
                            {accommodationStars}
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faStar} style={{ color: '#d46a17' }} className="w-4 h-4 sm:w-5 sm:h-5" />
                        </p>
                    </section>
                </CardTitle>
            </CardHeader>
            <CardContent className="text-textAll">
                <Carousel className="w-full max-w-xs mx-auto">
                    <CarouselContent>
                        {accommodationPhotos.map((photo, index) => (
                            <CarouselItem key={index}>
                                <div className="aspect-square relative overflow-hidden rounded-lg">
                                    <Image
                                        src={photo}
                                        alt={`Image ${index + 1} of ${accommodationName}`}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </CardContent>
            <CardFooter className="text-muted-foreground">
                <section className="flex flex-col sm:flex-row justify-between w-full items-center gap-2 sm:gap-0">
                    <p className="text-sm sm:text-base truncate overflow-hidden"> $ {accommodationPrice} MP night</p>
                    <p className="bg-green-700 text-blue-50 p-2 rounded-lg text-xs sm:text-sm whitespace-nowrap">Available</p>
                </section>
            </CardFooter>
        </Card>
    )
}