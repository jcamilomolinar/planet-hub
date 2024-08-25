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

function FlightSearchFormField({ elements, form, title, name, description }:
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
    language: z.string({
      required_error: "Please select a language.",
    }),
  })

export function FlightSearchForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FlightSearchFormField elements={languages} form={form} title="Title" name="language" description="exampleeeeeeeee"/>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}