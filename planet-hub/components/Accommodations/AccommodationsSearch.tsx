"use client";

import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
                                        "w-[240px] pl-3 text-left font-normal",
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

        if (formData.planet) {
            results = results.filter((accommodationInfo) =>
                accommodationInfo.planet === formData.planet
            );
        }

        if (formData.date?.from) {
            results = results.filter((accommodationInfo) => {
                const fromDate = formData.date.from;
                const toDate = formData.date.to || fromDate;
                return accommodationInfo.availableFrom <= toDate && accommodationInfo.availableTo >= fromDate;
            });
        }

        if (formData.max_price) {
            results = results.filter((accommodationInfo) =>
                accommodationInfo.pricePerNight <= formData.max_price!
            );
        }

        results = results.filter((accommodationInfo) =>
            accommodationInfo.capacity >= formData.guests
        );

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
                                <FlightSearchFormFieldDate
                                    form={form}
                                    title="Travel date"
                                    name="date"
                                    description="Enter when you will travel."
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
            <div>
                <h2 className="text-2xl font-bold mb-4">Search Results</h2>
                {searchResults.length === 0 ? (
                    <p>No accommodations found matching your criteria.</p>
                ) : (
                    <ul className="space-y-4">
                        {searchResults.map((result) => (
                            <li key={result.id} className="border p-4 rounded-md">
                                <p className="font-semibold">Planet: {result.planet}</p>
                                <p>Capacity: {result.capacity} guests</p>
                                <p>Price per night: {result.pricePerNight}</p>
                                <p>Available from: {format(result.availableFrom, "PPP")}</p>
                                <p>Available to: {format(result.availableTo, "PPP")}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default AccommodationsSearch;