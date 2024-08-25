"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Check, ChevronsUpDown } from "lucide-react"
import { useForm } from "react-hook-form"
import { date, z } from "zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Flight } from "@/components/Flight"

function FlightSearchFormFieldDate({ form, title, name, description }:
  { form: any, name: string, title: string, description: string }){
  
  return(
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{title}</FormLabel>
          <FormControl>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !field.value && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
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
                </Button>
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

function FlightSearchFormFieldInput({ form, title, name, description }:
  { form: any, name: string, title: string, description: string }) {
  
  return (
      <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{title}</FormLabel>
          <FormControl>
            <Input type="numeric" placeholder="Write!" {...field} />
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

function FlightSearchFormFieldCombobox({ elements, form, title, name, description }:
    { elements: any, form: any, name: string, title: string, description: string }) {
  
    return (
        <FormField
        control={form.control}
        name={name}
        render={({ field }:{field: any}) => (
          <FormItem className="flex flex-col">
            <FormLabel>{title}</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant="outline"
                    role="combobox"
                    className={cn(
                      "w-[200px] justify-between",
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
              <PopoverContent className="w-[200px] p-0">
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

const languages = [
    { label: "English", value: "en" },
    { label: "French", value: "fr" },
    { label: "German", value: "de" },
    { label: "Spanish", value: "es" },
    { label: "Portuguese", value: "pt" },
    { label: "Russian", value: "ru" },
    { label: "Japanese", value: "ja" },
    { label: "Korean", value: "ko" },
    { label: "Chinese", value: "zh" },
  ] as const
  
  const DATE_REQUIRED_ERROR = "Date is required.";

  const FormSchema = z.object({
    planet: z.string(),
    tour: z.string(),
    weather: z.string(),
    activityType: z.string(),
    puntuation: z.string(),
    price: z.coerce.number().nonnegative(),
    timeTravel: z.coerce.number().nonnegative(),
    date: z.object({
            from: z.date().optional(),
            to: z.date().optional(),
          }, {required_error: DATE_REQUIRED_ERROR}).refine((date) => {
          return !!date.from;
          }, DATE_REQUIRED_ERROR),
    })

export function FlightSearchForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      planet: "",
      tour: "",
      weather: "",
      activityType: "",
      puntuation: "",
      price: 0,
      timeTravel: 0
    }
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card>
            <CardHeader>
              <CardTitle className="text-textTitle">Search Flights</CardTitle>
            </CardHeader>
            <CardContent className="text-textAll">
              <div>
                <div className="grid grid-cols-5 grid-rows-1 gap-6">
                  <FlightSearchFormFieldCombobox elements={languages} form={form} title="Tours" name="tour" description="Select the tour of your preference." />
                  <FlightSearchFormFieldCombobox elements={languages} form={form} title="Weather" name="weather" description="Select the weather of your preference." />
                  <FlightSearchFormFieldCombobox elements={languages} form={form} title="Type of activity" name="activityType" description="Select the type of activity of your preference." />
                  <FlightSearchFormFieldCombobox elements={languages} form={form} title="Puntuation" name="puntuation" description="Select the minimum puntuation you want for your destination." />
                  <FlightSearchFormFieldCombobox elements={languages} form={form} title="Planet" name="planet" description="Select the planet." />
                </div>
                <div className="grid grid-cols-3 grid-rows-1 gap-6">
                  <FlightSearchFormFieldDate form={form} title="Travel date" name="date" description="Enter when you will travel." />
                  <FlightSearchFormFieldInput form={form} title="Price" name="price" description="Enter your maximum budget (0 if you don't have a maximum)." />
                  <FlightSearchFormFieldInput form={form} title="Time travel" name="timeTravel" description="Enter your desired maximum travel time (0 if you don't have a maximum)." />
                </div>
            </div>
              <Button className="my-5" type="submit" variant="outline">Search!</Button>
            </CardContent>
          </Card>
        </form>
      </Form>
      <div className="my-5">
        <Flight planet="Planeta Marte" timeTravel={100} price={150000}/>
      </div>
      
    </div>
  )
}