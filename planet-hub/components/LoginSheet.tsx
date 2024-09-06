"use client";

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { buttonVariants } from "@/components/ui/button"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

function LoginFormFieldInput({ form, title, name, type }:
  { form: any, name: string, title: string, type: string }) {
  
  return (
      <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{title}</FormLabel>
          <FormControl>
            <Input placeholder="Write!" type={type}  {...field} />
          </FormControl>
          <FormMessage />
          </FormItem>
          )}
        />
  )
}

const FormSchema = z.object({
  user: z.string().min(1, {message: "User is required"}),
  password: z.string().min(1, {message: "Password is required"})
})

export function LoginForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      user: "",
      password: "",
    }
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="text-textTitle drop-shadow-[0_1.2px_1.2px_rgba(155,155,155,0.8)] text-lg bg-white hover:bg-palleteOrange" variant="outline">
          Sign In
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Login</SheetTitle>
          <SheetDescription>
            Enter your credentials to access your account.
          </SheetDescription>
        </SheetHeader>
          <Form {...form}>
            <form className="flex flex-col space-y-4 p-4" onSubmit={form.handleSubmit(onSubmit)}>
              <LoginFormFieldInput form={form} title="User" name="user" type="" />
              <LoginFormFieldInput form={form} title="Password" name="password" type="password" />
              <Button className="my-5" type="submit" variant="outline">Log in!</Button>
            </form>
          </Form>
        <SheetFooter>
          <SheetClose
            className={buttonVariants({
              variant: "destructive",
              className: "text-lg w-full",
            })}
          >
            Close
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};