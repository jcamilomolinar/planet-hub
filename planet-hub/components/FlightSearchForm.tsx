"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Check, ChevronsUpDown } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
  
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
  
  const FormSchema = z.object({
    tour: z.string(),
    weather: z.string(),
    activityType: z.string(),
    puntuation: z.string(),
    price: z.coerce.number().nonnegative(),
    timeTravel: z.coerce.number().nonnegative()
  })

export function FlightSearchForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle className="text-textTitle">Search Flights</CardTitle>
          </CardHeader>
          <CardContent className="text-textAll">
            <div className="grid grid-cols-3 grid-rows-2 gap-6">
              <FlightSearchFormFieldCombobox elements={languages} form={form} title="Tours" name="tour" description="Select the tour of your preference." />
              <FlightSearchFormFieldCombobox elements={languages} form={form} title="Weather" name="weather" description="Select the weather of your preference." />
              <FlightSearchFormFieldCombobox elements={languages} form={form} title="Type of activity" name="activityType" description="Select the type of activity of your preference." />
              <FlightSearchFormFieldCombobox elements={languages} form={form} title="Puntuation" name="puntuation" description="Select the minimum puntuation you want for your destination" />
              <FlightSearchFormFieldInput form={form} title="Price" name="price" description="Enter your maximum budget (0 if you don't have a maximum)." />
              <FlightSearchFormFieldInput form={form} title="Time travel" name="timeTravel" description="Enter your desired maximum travel time (0 if you don't have a maximum)." />
            </div>
            <Button className="my-5" type="submit" variant="outline">Search!</Button>
          </CardContent>
        </Card>
      </form>
    </Form>
  )
}