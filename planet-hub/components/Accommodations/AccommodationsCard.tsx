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
import { format } from "date-fns"; // Asegúrate de importar format de date-fns

interface AccommodationsCardProps {
    accommodationName: string;
    accommodationPhotos: StaticImageData[];
    accommodationStars: number;
    pricePerNight: number;
    planet: string;
    availableFrom: Date;
    availableTo: Date;
    accommodationType: string;
}

export function AccommodationsCard({
    accommodationName,
    accommodationPhotos,
    accommodationStars,
    pricePerNight,
    planet,
    availableFrom,
    availableTo,
    accommodationType,
}: AccommodationsCardProps) {
    return (
        <Card className="w-full shadow-2xl bg-white rounded-xl p-3 m-4 shadow-palleteOrangeVariant hover:scale-105 duration-200 ease-in-out">
            <CardHeader className="flex items-center flex-col sm:flex-row gap-2 sm:gap-5">
                <CardTitle className="text-textTitle flex flex-col sm:flex-row justify-between w-full items-center">
                    <section className="flex flex-col justify-between text-sm sm:text-base whitespace-nowrap">
                        <p className="text-base sm:text-base md:text-xl lg:text-2xl text-center sm:text-left mb-2 sm:mb-0 truncate overflow-hidden">{accommodationName}</p>
                        <p className="text-base sm:text-sm italic text-gray-600"> Planet : {planet}</p>
                    </section>
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
                <div className="mt-4 text-sm text-gray-600">
                    <p className="text-xs">Available from: {format(availableFrom, "MMM dd, yyyy")} - {format(availableTo, "MMM dd, yyyy")}</p>
                    <p className="text-xs">Type: {accommodationType}</p>
                </div>
            </CardContent>
            <CardFooter className="text-muted-foreground">
                <section className="flex flex-col sm:flex-row justify-between w-full items-center gap-2 sm:gap-0">
                    <p className="text-sm truncate overflow-hidden"> $ {pricePerNight} MP night</p>
                    <p className="bg-green-700 text-blue-50 p-2 rounded-lg text-xs whitespace-nowrap">Available</p>
                </section>
            </CardFooter>
        </Card>
    )
}