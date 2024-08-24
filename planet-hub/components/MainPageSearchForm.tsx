import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DatePickerWithRange } from "@/components/DatePickerWithRange";

export function MainPageSearchForm() {
  return (
    <Card className="w-auto">
      <CardHeader>
        <CardTitle>Search a planet!</CardTitle>
        <CardDescription>Find flights and accommodations to the planet of your choice.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex w-auto items-center gap-10">
            <div className="flex flex-col w-1/2 space-y-1.5">
              <Label className="px-3" htmlFor="planet">Planet</Label>
              <Select>
                <SelectTrigger id="planet">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="planet1">planet1</SelectItem>
                  <SelectItem value="planet2">planet2</SelectItem>
                  <SelectItem value="planet3">planet3</SelectItem>
                  <SelectItem value="planet4">planet4</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label className="px-3" htmlFor="dateRange">Dates</Label>
                <DatePickerWithRange className="w-1/2" id="dateRange"></DatePickerWithRange>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex gap-20">
        <Button variant="outline">Search flights 🚀</Button>
        <Button variant="outline">Search accommodations 🏨</Button>
      </CardFooter>
    </Card>
  )
}
