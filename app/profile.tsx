"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import DatePicker from "react-datepicker";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import {DatePickerDemo} from '@/app/ui/date-picker'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import {getCities, db} from '@/app/firebase/client'
import { useState, useEffect } from "react"
const formSchema = z.object({
  from: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  to: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  date: z.object({
    
      from: z.date(),
      to: z.date(),
    }),
})



export const ProfileForm = ()=> {
  const router = useRouter()
  const [docs, setDocs] = useState<any[]>([])
useEffect(() => {
  const fetchData = async () => {
      const data = await getCities(db)
        setDocs(data);
  }
  fetchData();

}, [])
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      from: "",
      to: "",
      date: {
        from: new Date(),
        to: new Date(),
      }
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const {from, to } = values
    const fromString = from.toString()
    const dataSend = {
      from: from,
      to: to,
  
    }
    console.log(dataSend)
    const queryString = new URLSearchParams({
      from,}).toString()
    console.log(queryString)
    router.push(`/dashboard/flights/${queryString}`)
    
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
          control={form.control}
          name="from"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex flex-col space-y-0.98">
                <Label htmlFor="from">From</Label>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger id="from" className="fixed-width-input h-16 w-50 border-gray-300 rounded-md">
                          <SelectValue placeholder="Select your origin" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                           {docs.map((doc) => (<SelectItem key={doc.city} value={doc.city}>{doc.city}</SelectItem>))}
                        </SelectContent>
                      </Select>
              </div>
              </FormControl>
            </FormItem>
          )}
        />
  <FormField
          control={form.control}
          name="to"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex flex-col space-y-0.98">
                <Label htmlFor="to">To</Label>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger id="to" className="fixed-width-input h-16 w-50 border-gray-300 rounded-md">
                          <SelectValue placeholder="Select your origin" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                           {docs.map((doc) => (<SelectItem key={doc.city} value={doc.city}>{doc.city}</SelectItem>))}
                        </SelectContent>
                      </Select>
              </div>
              </FormControl>
            </FormItem>
          )}
        />
  <FormField
      control={form.control}
      name="date"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Travel Date</FormLabel>
          <FormControl>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !field.value && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {field.value?.from ? (
                    field.value.to ? (
                      <>
                        {format(field.value.from, "LLL dd, y")} -{" "}
                        {format(field.value.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(field.value.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={field.value?.from}
                  selected={field.value}
                  onSelect={field.onChange}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </FormControl>
          
          <FormMessage />
        </FormItem>
      )}
    />
        <Button className="bg-green-500" type="submit">Submit</Button>
        <div className="mt-2">
          <Button className="bg-gray-500"onClick={() => router.push('/dashboard/tables')}>Available Flights</Button>
        </div>
      </form>
    </Form>
   
  )
}
