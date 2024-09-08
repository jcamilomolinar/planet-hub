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
import { addUser } from "@/lib/data"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

function SignUpFormFieldInput({ form, title, name, type }:
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
  email: z.string().email({message: "Email is required"}),
  user: z.string().min(1, {message: "User is required"}),
  name: z.string().min(1, {message: "Name is required"}),
  password: z.string().min(1, {message: "Password is required"})
})

export function SignUpForm() {
  const [userAdded, setUserAdded] = useState<boolean>();
  const { toast } = useToast()

  const handleClick = () => {
    setUserAdded(false);
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      user: "",
      name: "",
      password: "",
    }
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    addUser(data.user, data.name, data.email, data.password);
    toast({
      title: "Sign Up successful",
      description: "Try to log in to your new Account!",
    })
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="text-textTitle drop-shadow-[0_1.2px_1.2px_rgba(155,155,155,0.8)] text-lg bg-white hover:bg-palleteOrange" variant="outline">
          Sign Up
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Sign Up</SheetTitle>
          <SheetDescription>
            Enter your credentials to access your account.
          </SheetDescription>
        </SheetHeader>
          <Form {...form}>
            <form className="flex flex-col space-y-4 p-4" onSubmit={form.handleSubmit(onSubmit)}>
              <SignUpFormFieldInput form={form} title="Email" name="email" type="" />
              <SignUpFormFieldInput form={form} title="User" name="user" type="" />
              <SignUpFormFieldInput form={form} title="Name" name="name" type="" />
              <SignUpFormFieldInput form={form} title="Password" name="password" type="password" />
              <Button className="my-5" type="submit" variant="outline">Sign Up!</Button>
            </form>
          </Form>
        <SheetFooter>
          <SheetClose
            onClick={handleClick}
            className={buttonVariants({
              variant: "destructive",
              className: "text-lg w-full",
            })}
          >
            Close
          </SheetClose>
        </SheetFooter>
        {userAdded && (
            <div>
              <p className="text-textTitle text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)] text-center my-10 animate-bounce">Sign Up successful!</p>
            </div>
        )}
      </SheetContent>
    </Sheet>
  );
};