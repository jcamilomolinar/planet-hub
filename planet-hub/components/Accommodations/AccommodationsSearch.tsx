"use client";
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';


// Esquema de validación actualizado para los alojamientos
const accommodationSchema = z.object({
    id: z.string(),
    planet: z.string(),
    date: z.date(),
    capacity: z.number().positive(),
    pricePerNight: z.number().positive(),
});


// Search form validation schema
const searchFormSchema = z.object({
    planet: z.string().optional(),
    entryDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "invalid entry date",
    }),
    exitDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "invalid exit date",
    }),
    guests: z.number().min(1, "Al menos 1 huésped es requerido"),
    max_price: z.number().nonnegative().optional().refine((max_price) => max_price === undefined || max_price > 0, {
        message: "The maximum price must be greater than 0",
    }),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

function AccommodationsSearch({ data }: { data: z.infer<typeof accommodationSchema>[] }) {
    const [searchResults, setSearchResults] = useState<z.infer<typeof accommodationSchema>[]>([]);

    const { register, handleSubmit, formState: { errors } } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    });

    const onSubmit = (formData: SearchFormInputs) => {
        // console.log(formData);

        if (formData.planet) {
            console.log(formData.planet);
            console.log(data);

            let results = data.filter((accommodationInfo) =>
                accommodationInfo.planet === formData.planet
            );

            if (formData.entryDate && formData.exitDate) {
                const entryDate = new Date(formData.entryDate);
                const exitDate = new Date(formData.exitDate);

                results = results.filter((accommodationInfo) => {
                    const availableDate = new Date(accommodationInfo.date); // Asegúrate de que sea un objeto Date
                    return availableDate >= entryDate && availableDate <= exitDate;
                });
            }

            console.log(results);
            setSearchResults(results);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="planet">Planet:</label>
                    <input type="text" id="planet" {...register("planet")} />
                    {errors.planet && <span>{errors.planet.message}</span>}
                </div>

                <div>
                    <label htmlFor="entryDate">Entry date:</label>
                    <input type="date" id="entryDate" {...register("entryDate")}
                    />
                    {errors.entryDate && <span>{errors.entryDate.message}</span>}
                </div>

                <div>
                    <label htmlFor="exitDate">Exit date:</label>
                    <input type="date" id="exitDate" {...register("exitDate")}
                    />
                    {errors.exitDate && <span>{errors.exitDate.message}</span>}
                </div>

                <div>
                    <label htmlFor="guests">Number of guests:</label>
                    <input type="number" id="guests" {...register("guests", { valueAsNumber: true })}
                    />
                    {errors.guests && <span>{errors.guests.message}</span>}
                </div>

                <div>
                    <label htmlFor="max_price">Price per night:</label>
                    <input type="number" id="max_price" {...register("max_price", { valueAsNumber: true })}
                    />
                    {errors.max_price && <span>{errors.max_price.message}</span>}
                </div>

                <button type="submit">Search</button>
            </form>
            <div>
                <p>Search result</p>
                <ul>
                    {searchResults.map((result) => (
                        <li key={result.id}>
                            <p>Planet: {result.planet}</p>
                            <p>Capacity: {result.capacity}</p>
                            <p>Price per night: {result.pricePerNight}</p>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default AccommodationsSearch;