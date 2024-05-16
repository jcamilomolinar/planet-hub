'use client'

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useEffect, useState } from "react"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form"

function QueryFormFieldYear({ form }: { form: any }) {

  return (
    <FormField
      control={form.control}
      name="year"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>Select a year</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={form.getValues("year")}
              className="flex flex-col space-y-1"
            >
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="All" />
                </FormControl>
                <FormLabel className="font-normal">
                  All
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="2016" />
                </FormControl>
                <FormLabel className="font-normal">
                  2016
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="2017" />
                </FormControl>
                <FormLabel className="font-normal">
                  2017
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="2018" />
                </FormControl>
                <FormLabel className="font-normal">
                  2018
                </FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default QueryFormFieldYear;