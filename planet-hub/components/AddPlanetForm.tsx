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
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useToast } from "@/hooks/use-toast"

function AddPlanetFormFieldInput({ form, title, name, description }:
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

const FormSchema = z.object({
  planet: z.string().min(1, {message: "Planet is required"}),
  tours: z.string().min(1, {message: "Tour is required"}),
  weather: z.string().min(1, {message: "Weather is required"}),
  typeActivity: z.string().min(1, {message: "Type of activity is required"}),
  description: z.string().min(1, {message: "Description is required"})
})

export function AddPlanetForm() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      planet: "",
      tours: "",
      weather: "",
      typeActivity: "",
      description: ""
    }
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    toast({
      variant: "info",
      title: "Planet Added!",
      description: "Now you can view it in the planets tab 🪐",
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle className="text-textTitle">Add planet</CardTitle>
          </CardHeader>
          <CardContent className="text-textAll">
            <div className="grid grid-cols-2 grid-rows-2 gap-6 my-5">
              <AddPlanetFormFieldInput form={form} title="Planet name" name="planet" description="Add the name of the new planet." />
              <AddPlanetFormFieldInput form={form} title="Tour" name="tours" description="Add the main tour of the new planet." />
              <AddPlanetFormFieldInput form={form} title="Weather" name="weather" description="Add the weather of the new planet." />
              <AddPlanetFormFieldInput form={form} title="Type of activity" name="typeActivity" description="Add the main type of activity of the new planet." />
            </div>
            <AddPlanetFormFieldInput form={form} title="Description" name="description" description="Add the description of the new planet." />
            <Button className="mt-5" type="submit" variant="outline">Add Planet!</Button>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
};