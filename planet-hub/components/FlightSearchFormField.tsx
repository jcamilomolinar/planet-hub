import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Check, ChevronsUpDown } from "lucide-react"
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
  CommandList
} from "@/components/ui/command"


export function FlightSearchFormField({ elements, form, title, name, description }:
  { elements: { label: string, value: string }[], form: any, name: string, title: string, description: string }) {

  return (
    <FormField
    control={form.control}
    name={name}
    render={({ field }:{ field: any }) => (
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
                      (element) => element.value === field.value
                    )?.label
                  : "Select an option"}
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search option..." />
              <CommandList>
                <CommandEmpty>Not found</CommandEmpty>
                <CommandGroup>
                  {elements.map((element) => (
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