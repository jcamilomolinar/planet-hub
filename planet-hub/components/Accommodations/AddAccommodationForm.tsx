"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { useToast } from "@/hooks/use-toast"
import MultiSelect from "@/components/multi-select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription
} from "@/components/ui/form"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react"
import { planets, servicesList, defaultServicesList } from "@/lib/data"
// import { planets, defaultServicesList } from "@/lib/data"
import MultiImageUpload from '@/components/multi-image-upload';

function AccommodationFormFieldDate({ form, title, name, description }: {
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

function AddAccommodationFormFieldTextarea({ form, title, name, description }:
    { form: any, name: string, title: string, description: string }) {

    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{title}</FormLabel>
                    <FormControl>
                        <Textarea {...field} placeholder="Enter your text here..." />
                    </FormControl>
                    <FormDescription>
                        {description}
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}

function AccommodationSearchFormFieldCombobox({ elements, form, title, name, description }:
    { elements: any, form: any, name: string, title: string, description: string }) {

    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }: { field: any }) => (
                <FormItem className="flex flex-col w-auto">
                    <FormLabel>{title}</FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    className={cn(
                                        "w-auto justify-between",
                                        !field.value && "text-muted-foreground"
                                    )}
                                >
                                    {field.value
                                        ? elements.find(
                                            (element: any) => element.value === field.value
                                        )?.label
                                        : "Select an option"}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Command>
                                <CommandInput placeholder="Search option..." />
                                <CommandList>
                                    <CommandEmpty>Not found</CommandEmpty>
                                    <CommandGroup>
                                        {elements.map((element: any) => (
                                            <CommandItem
                                                value={element.label}
                                                key={element.value}
                                                onSelect={() => {
                                                    form.setValue(name, element.value)
                                                }}
                                            >
                                                <Check
                                                    className={cn(
                                                        "mr-2 h-4 w-4",
                                                        element.value === field.value
                                                            ? "opacity-100"
                                                            : "opacity-0"
                                                    )}
                                                />
                                                {element.label}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
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

const planetsList = planets.map(planet => ({
    label: planet.name,
    value: planet.name
}));

function AddAccommodationFormFieldInput({ form, title, name, description, type }:
    { form: any, name: string, title: string, description: string, type: string }) {

    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{title}</FormLabel>
                    <FormControl>
                        <Input type={type} placeholder=""  {...field} />
                    </FormControl>
                    <FormDescription>
                        {description}
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

const FormSchema = z.object({
    planet: z.string().min(1, { message: "Planet is required" }),
    pricePerNight: z.string().min(1, { message: "Price per night is required" }),
    capacity: z.string().min(1, { message: "Capacity is required" }),
    date: z.object({
        from: z.date(),
        to: z.date(),
    }).optional(),
    nameAccommodation: z.string().min(1, { message: "Accommodation name is required" }),
    detailedDescription: z.string().min(1, { message: "Detailed description is required" }),
    accommodationNumber: z.string().min(1, { message: "Accommodation number is required" }),
    hostName: z.string().min(1, { message: "Host name is required" }),
    hostEmail: z.string().email({ message: "Invalid email address" }),
    images: z.array(z.object({
        file: z.any(),
    })).optional(),
    services: z.array(z.string()).min(1, { message: "Selecciona al menos un servicio" }),
})

function AddAccommodation() {

    const { toast } = useToast()
    const [formData, setFormData] = useState<z.infer<typeof FormSchema> | null>(null);
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            planet: "",
            pricePerNight: "",
            capacity: "",
            nameAccommodation: "",
            detailedDescription: "",
            accommodationNumber: "",
            hostName: "",
            hostEmail: "",
            services: [],
        }
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data);
        setFormData(data);
        toast({
            variant: "info",
            title: "Accommodation Added!",
            description: "You can view the details below.",
        });
    };


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <Card >
                    <CardHeader>
                        <CardTitle className="text-textTitle">Add accommodation</CardTitle>
                    </CardHeader>
                    <CardContent className="text-textAll flex flex-col gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-textTitle">Accommodation information</CardTitle>
                            </CardHeader>
                            <CardContent className="text-textAll">
                                <div className="grid grid-cols-2 grid-rows-2 gap-6 my-5">
                                    <AddAccommodationFormFieldInput type="number" form={form} title="Price per night" name="pricePerNight" description="Add the price per night for your accommodation." />
                                    <AccommodationSearchFormFieldCombobox elements={planetsList} form={form} name="planet" title="Planet" description="Enter the planet you want to visit." />
                                    <AddAccommodationFormFieldInput type="number" form={form} title="Capacity" name="capacity" description="Add the capacity (persons) for your accommodation." />
                                    <AccommodationFormFieldDate form={form} title="Dates of availability" name="date" description="Select the range of dates when your accommodation is available." />
                                    <MultiImageUpload form={form} />
                                    <AddAccommodationFormFieldInput type="text" form={form} title="Accommodation name" name="nameAccommodation" description="Add the name of the accommodation." />
                                    <AddAccommodationFormFieldTextarea form={form} title="Detailed Description" name="detailedDescription" description="Provide a detailed description of the accommodation." />
                                    <AddAccommodationFormFieldInput type="number" form={form} title="Accommodation number" name="accommodationNumber" description="Provide the number of available accommodations" />
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-textTitle">Add host information</CardTitle>
                            </CardHeader>
                            <CardContent className="text-textAll">
                                <div className="grid grid-cols-2 grid-rows-2 gap-6">
                                    <AddAccommodationFormFieldInput type="text" form={form} title="Host name" name="hostName" description="Add the name of the host." />
                                    <AddAccommodationFormFieldInput type="email" form={form} title="Host email" name="hostEmail" description="Add the host email." />
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-textTitle">Servicios del alojamiento</CardTitle>
                            </CardHeader>
                            <CardContent className="text-textAll">
                                <MultiSelect
                                    control={form.control}
                                    name="services"
                                    label="Servicios"
                                    options={[...servicesList]}
                                    placeholder="Selecciona los servicios"
                                    description="Selecciona todos los servicios que ofrece tu alojamiento"
                                />
                            </CardContent>
                        </Card>
                        <div className="flex justify-center">
                            <Button className=" w-[240px] mt-5" type="submit" variant="outline">Add Accommodation!</Button>
                        </div>
                    </CardContent>
                </Card>
            </form>

            {formData && (
                <Card className="mt-8">
                    <CardHeader>
                        <CardTitle className="text-textTitle">Submitted Accommodation Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <pre className="whitespace-pre-wrap">{JSON.stringify(formData, null, 2)}</pre>
                    </CardContent>
                </Card>
            )}
        </Form>
    );
}

export default AddAccommodation