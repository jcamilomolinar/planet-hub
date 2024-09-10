import React from "react";
import { Controller } from "react-hook-form";
import { cn } from "@/lib/utils";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandEmpty,
} from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";

interface MultiSelectProps {
    control: any;
    name: string;
    options: { value: string; label: string }[];
    label: string;
    placeholder: string;
    description?: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
    control,
    name,
    options,
    label,
    placeholder,
    description,
}) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <div className="flex flex-col">
                    <label className="mb-2">{label}</label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                className={cn(
                                    "w-full justify-between",
                                    field.value.length === 0 && "text-muted-foreground"
                                )}
                            >
                                {field.value.length > 0
                                    ? `${field.value.length} selected`
                                    : placeholder}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0">
                            <Command>
                                <CommandInput placeholder="Search services..." />
                                <CommandList>
                                    <CommandEmpty>No results found.</CommandEmpty>
                                    <CommandGroup>
                                        {options.map((option) => (
                                            <CommandItem
                                                key={option.value}
                                                value={option.value}
                                                onSelect={() => {
                                                    const isSelected = field.value.includes(option.value);
                                                    if (isSelected) {
                                                        field.onChange(
                                                            field.value.filter((val: string) => val !== option.value)
                                                        );
                                                    } else {
                                                        field.onChange([...field.value, option.value]);
                                                    }
                                                }}
                                            >
                                                <Check
                                                    className={cn(
                                                        "mr-2 h-4 w-4",
                                                        field.value.includes(option.value)
                                                            ? "opacity-100"
                                                            : "opacity-0"
                                                    )}
                                                />
                                                {option.label}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    {description && <p className="mt-2 text-sm text-muted-foreground">{description}</p>}
                </div>
            )}
        />
    );
};

export default MultiSelect;
