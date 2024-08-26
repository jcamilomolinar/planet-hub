import React from "react"
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form"

interface FormFieldComponentProps {
    control: Control<any>;
    name: string;
    label: string;
    placeholder?: string;
    description?: string;
    maxLength?: number;
    pattern?: string;
  }
  
  export function FormFieldComponent({
    control,
    name = "",
    label = "",
    placeholder = "",
    description = "",
    maxLength,
    pattern,
  }: FormFieldComponentProps) {
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                placeholder={placeholder}
                {...field}
                value={field.value || ""}
                maxLength={maxLength}
                pattern={pattern}
              />
            </FormControl>
            {description && (
              <FormDescription>{description}</FormDescription>
            )}
            <FormMessage />
          </FormItem>
        )}
      />
    )
  }
  
