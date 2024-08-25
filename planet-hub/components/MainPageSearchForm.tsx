"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Check, ChevronsUpDown } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
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
import { planets } from "@/lib/data"

function MainPageFormFieldDate({ form, title, name, description }:
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

function MainPageFormFieldCombobox({ elements, form, title, name, description }:
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

const planetsList = planets.map(planet => ({
  label: planet.name,
  value: planet.name
}));
  
  const DATE_REQUIRED_ERROR = "Date is required.";

  const FormSchema = z.object({
    planet: z.string(), 
    date: z.object({
            from: z.date().optional(),
            to: z.date().optional(),
          }, {required_error: DATE_REQUIRED_ERROR}).refine((date) => {
          return !!date.from;
          }, DATE_REQUIRED_ERROR),
    })

export function MainPageSearchForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
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
              <CardTitle className="text-textTitle">Search your next destination!</CardTitle>
            </CardHeader>
            <CardContent className="text-textAll">
              <div>
                  <div className="grid grid-cols-3 grid-rows-1 gap-6">
                    <MainPageFormFieldCombobox elements={planetsList} form={form} title="Planet" name="planet" description="Select the planet of your preference." />
                    <MainPageFormFieldDate form={form} title="Travel date" name="date" description="Enter when you will travel." />
                    <div className="grid items-center justify-items-center">
                      <Button className="w-2/3" type="submit" variant="outline">Search flights 🚀</Button>
                      <Button className="w-2/3" type="submit" variant="outline">Search accomodations 🏨</Button>
                    </div>
                  </div>
              </div>
            </CardContent>
          </Card>
        </form>
      </Form>
    </div>
  )
}