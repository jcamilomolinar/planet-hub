"use client";

import React, { useState } from 'react';
import { z } from 'zod';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from 'next/link';
import { AccommodationsCard } from '@/components/Accommodations/AccommodationsCard';
import PlanetPhoto from "@/public/planet.jpg";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

const accommodationSchema = z.object({
    id: z.string(),
    planet: z.string(),
    availableFrom: z.date(),
    availableTo: z.date(),
    capacity: z.number().positive(),
    pricePerNight: z.number().positive(),
});

const searchFormSchema = z.object({
    planet: z.string().optional(),
    date: z.object({
        from: z.date(),
        to: z.date().optional(),
    }),
    guests: z.number().min(1, "At least 1 guest is required"),
    max_price: z.number().nonnegative().optional().refine((max_price) => max_price === undefined || max_price > 0, {
        message: "The maximum price must be greater than 0",
    }),
});


type SearchFormInputs = z.infer<typeof searchFormSchema>;

function FlightSearchFormFieldDate({ form, title, name, description }: {
    form: any;
    title: string;
    name: string;
    description: string;
}) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex flex-col">
                    <FormLabel>{title}</FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-auto pl-3 text-left font-normal content-center",
                                        !field.value && "text-muted-foreground"
                                    )}
                                >
                                    {field.value?.from ? (
                                        field.value.to ? (
                                            <>
                                                {format(field.value.from, "LLL dd, y")} -{" "}
                                                {format(field.value.to, "LLL dd, y")}
                                            </>
                                        ) : (
                                            format(field.value.from, "LLL dd, y")
                                        )
                                    ) : (
                                        <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                initialFocus
                                mode="range"
                                defaultMonth={field.value?.from}
                                selected={field.value}
                                onSelect={field.onChange}
                                numberOfMonths={2}
                            />
                        </PopoverContent>
                    </Popover>
                    <FormDescription>
                        {description}
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}

function AccommodationsSearch({ data }: { data: z.infer<typeof accommodationSchema>[] }) {
    const [searchResults, setSearchResults] = useState<z.infer<typeof accommodationSchema>[]>([]);

    const form = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
        defaultValues: {
            planet: "",
            guests: 1,
            max_price: undefined,
        },
    });

    const onSubmit = (formData: SearchFormInputs) => {
        let results = data;
        console.log(data);

        // filter by planet | optional
        if (formData.planet) {
            results = results.filter((accommodationInfo) =>
                accommodationInfo.planet === formData.planet
            );
        }
        // filter by date | obligatory
        if (formData.date?.from) {
            const fromDate = formData.date.from;
            const toDate = formData.date.to || fromDate;
            results = results.filter((accommodationInfo) =>
                accommodationInfo.availableFrom <= toDate && accommodationInfo.availableTo >= fromDate
            );
        }

        // filter by guest | obligatory
        results = results.filter((accommodationInfo) =>
            accommodationInfo.capacity >= formData.guests
        );

        // filter by price | optional
        if (formData.max_price !== undefined && formData.max_price > 0) {
            results = results.filter((accommodationInfo) =>
                accommodationInfo.pricePerNight <= formData.max_price!
            );
        }

        results = results.filter((accommodationInfo) =>
            accommodationInfo.capacity >= formData.guests
        );
        console.log("Resiltados", results.planet);
        setSearchResults(results);
    };

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-textTitle">Search Accommodations</CardTitle>
                        </CardHeader>
                        <CardContent className="text-textAll">
                            <FlightSearchFormFieldDate
                                form={form}
                                title="Travel date"
                                name="date"
                                description="Enter when you will travel."
                            />

                            <div className="grid grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="planet"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Planet</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter planet name" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                Enter the planet you want to visit.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="guests"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Number of guests</FormLabel>
                                            <FormControl>
                                                <Input type="number" {...field} onChange={e => field.onChange(parseInt(e.target.value))} />
                                            </FormControl>
                                            <FormDescription>
                                                Enter the number of guests.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="max_price"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Maximum price per night</FormLabel>
                                            <FormControl>
                                                <Input type="number" {...field} onChange={e => field.onChange(parseFloat(e.target.value))} />
                                            </FormControl>
                                            <FormDescription>
                                                Enter the maximum price per night (optional).
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button className="mt-6" type="submit">Search</Button>
                        </CardContent>
                    </Card>
                </form>
            </Form>
            <Separator className="my-8" />

            <h1 className="text-textTitle text-5xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Search results</h1>
            <h2 className="text-xl text-muted-foreground my-5">These are the accommodations options we found for you!</h2>


            {searchResults.length === 0 ? (
                <p>Sorry, no accommodations matching your criteria were found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
                    {searchResults.map(option => (
                        <Link href={`/accomodation/${option.id}`} key={option.id}>
                            <AccommodationsCard
                                accommodationName={option.accommodationName}
                                accommodationPhotos={option.accommodationPhotos}
                                accommodationStars={option.accommodationStars}
                                pricePerNight={option.pricePerNight}
                                planet={option.planet}
                                availableFrom={option.availableFrom}
                                availableTo={option.availableTo}
                            />
                        </Link>
                    ))}
                </div>
            )}
        </div >
    );
}

export default AccommodationsSearch;