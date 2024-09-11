"use client";

import { Button } from "@/components/ui/button"
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
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { planets } from "@/lib/data"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { Check, ChevronsUpDown, CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"

function AddFlightFormFieldInput({ form, title, name, description }:
  { form: any, name: string, title: string, description: string }) {
  
  return (
      <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{title}</FormLabel>
          <FormControl>
            <Input placeholder="Write!"  {...field} />
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

function AddFlightFormFieldCombobox({ elements, form, title, name, description }:
  { elements: any, form: any, name: string, title: string, description: string }) {

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }: { field: any }) => (
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

function AddFlightFormFieldDatePicker({form}:{form: any}){
  return (
    <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Flight date</FormLabel>
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
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date()
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Choose the date of the flight.
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

const FormSchema = z.object({
  planet: z.string({required_error: "A Planet is required."}),
  date: z.date({required_error: "A date of flight is required."}),
  price: z.coerce.number({required_error: "A price is required."}).nonnegative(),
  timeTravel: z.coerce.number({required_error: "A time travel is required."}).nonnegative(),
})

export function AddFlightForm() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    toast({
      variant: "info",
      title: "Flight Added!",
      description: "Now you can view it in the Flights tab 🚀",
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle className="text-textTitle">Add flight</CardTitle>
          </CardHeader>
          <CardContent className="text-textAll">
            <div className="flex justify-around my-5">
              <AddFlightFormFieldCombobox elements={planetsList} form={form} title="Destiny planet" name="planet" description="Choose the planet where the flight is headed" />
              <AddFlightFormFieldDatePicker form={form} />
            </div>
            <div className="grid grid-cols-2 grid-rows-1 gap-10">
              <AddFlightFormFieldInput form={form} title="Price" name="price" description="Add the price of the flight." />
              <AddFlightFormFieldInput form={form} title="Time travel" name="timeTravel" description="Add the flight travel time (in light years)." />
            </div>
            <Button className="my-5" type="submit" variant="outline">Add Planet!</Button>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
};