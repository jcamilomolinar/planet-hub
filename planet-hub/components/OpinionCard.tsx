import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function OpinionCard({name, user, children, date}: {name: string, user: string, children: React.ReactNode, date: string}) {
  return (
    <Card className="shadow-2xl bg-white rounded-xl p-3 m-4 shadow-palleteOrangeVariant hover:scale-110 duration-200 ease-in-out">
      <CardHeader className="flex items-center flex-row gap-5">
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt={user} />
            <AvatarFallback>NN</AvatarFallback>
        </Avatar>
        <div>
            <CardTitle className="text-textTitle">{name}</CardTitle>
            <CardDescription>@{user}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="text-textAll">
        <p>{children}</p>
      </CardContent>
      <CardFooter className="text-muted-foreground">
        <p>{date}</p>
      </CardFooter>
    </Card>
  )
}
