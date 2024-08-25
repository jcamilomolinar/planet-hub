"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";

const LoginSheet: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
       <Button className='text-textTitle drop-shadow-[0_1.2px_1.2px_rgba(155,155,155,0.8)] text-lg bg-white hover:bg-palleteOrange' variant='outline'>
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
        <form className="flex flex-col space-y-4 p-4">
          <input
            type="email"
            placeholder="Email"
            className="input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input"
            required
          />
          <button
            type="submit"
            className={buttonVariants({
              variant: "outline",
              className:
                "text-textTitle drop-shadow-[0_1.2px_1.2px_rgba(155,155,155,0.8)] text-lg",
            })}
          >
            Sign In
          </button>
        </form>
        <SheetFooter>
          <SheetClose
            className={buttonVariants({
              variant: "secondary",
              className: "text-lg",
            })}
          >
            Close
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default LoginSheet;
