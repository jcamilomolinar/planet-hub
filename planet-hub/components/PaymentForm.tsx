"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Card,
  CardDescription,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import TripSummary from "./TripSummary"

function PaymentInput({ form, title, name, placeholder, description, maxLength, formatValue }:
  { form: any, name: string, title: string, placeholder: string, description: string, maxLength: number, formatValue?: (value: string) => string }) {

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{title}</FormLabel>
          <FormControl>
            <Input
              type="text"
              placeholder={placeholder}
              maxLength={maxLength}
              {...field}
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, ""); // Solo números
                if (formatValue) value = formatValue(value); // Formatear si es necesario
                field.onChange(value);
              }}
            />
          </FormControl>
          {description && (
            <p className="mt-2 text-sm text-gray-500">
              {description}
            </p>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

const FormSchema = z.object({
  card: z.string().min(19).max(19),
  expiration: z.string().min(5).max(5),
  cvv: z.string().min(3).max(4),
  zipcode: z.string().min(5).max(8),
})

export function PaymentForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      card: "",
      expiration: "",
      cvv: "",
      zipcode: "",
    }
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-textTitle">Payment Information</CardTitle>
      </CardHeader>
      <CardContent>

        <TripSummary planet="planet1" dates="Sep 11 - 12" total="$900"></TripSummary>

        <div className="mb-5"></div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-6">
              <PaymentInput
                form={form}
                title="Credit or debit card number"
                name="card"
                placeholder="0000 0000 0000 0000"
                description="Enter the 16 digits of your card"
                maxLength={19}
                formatValue={(value) =>
                  value.replace(/(\d{4})(?=\d)/g, "$1 ")
                }
              />
              <PaymentInput
                form={form}
                title="Expiration date"
                name="expiration"
                placeholder="MM/YY"
                description="Enter the expiration date of your card."
                maxLength={5}
                formatValue={(value) =>
                  value.length > 2 ? value.slice(0, 2) + '/' + value.slice(2) : value
                }
              />
              <PaymentInput
                form={form}
                title="CVV"
                name="cvv"
                placeholder="1234"
                description="Enter the CVV of your card."
                maxLength={4}
              />
              <PaymentInput
                form={form}
                title="ZIP Code"
                name="zipcode"
                placeholder="99990000"
                description="Enter the ZIP Code of your region."
                maxLength={8}
              />
            </div>
            <Button className="my-5" type="submit" variant="outline">Confirm and pay</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
