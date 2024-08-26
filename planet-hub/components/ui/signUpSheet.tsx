"use client";

import React, { useState } from "react";
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

const SignUpSheet: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("email", email);
    localStorage.setItem("name", name);
    localStorage.setItem("username", username);
    localStorage.setItem("id", id);
    localStorage.setItem("password", password);
    alert("Information saved to localStorage!");
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
            Enter your information to Sign Up.
          </SheetDescription>
        </SheetHeader>
        <form className="flex flex-col space-y-4 p-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Name"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Username"
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="ID"
            className="input"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            Sign Up
          </button>
        </form>
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

export default SignUpSheet;
