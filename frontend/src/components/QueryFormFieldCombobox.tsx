import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/Command"


function QueryFormFieldCombobox({ elements, form, title, name, description }:
  { elements: { label: string, value: string }[], form: any, name: string, title: string, description: string }) {

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col w-3/4">
          <FormLabel>{title}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "justify-between",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value
                    ? elements.find(
                      (element) => element.value === field.value
                    )?.label
                    : "Click me!"}
                  <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="p-0">
              <Command>
                <CommandInput
                  className="h-9"
                />
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
                      {element.label}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          element.value === field.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
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

export default QueryFormFieldCombobox