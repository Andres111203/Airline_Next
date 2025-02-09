"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
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
import { useParams, useRouter, useSearchParams } from "next/navigation"
const formSchema = z.object({
   id_vuelo: z.string(),
   email: z.string(),
   phone: z.string(),
   name: z.string().min(1, { message: "Name is required" }),
   lastname: z.string().min(1, { message: "Lastname is required" }),  
   documento: z.string().min(1, { message: "Documento is required" }),
  price: z.string()
})

export default function ProfileForm() {
  const {id_flight} = useParams()
  const search = useSearchParams()
  const {price}: any = search.get('price')

  console.log(price)
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phone: "",
      name: "",
      lastname: "",
      documento: "",
      id_vuelo: Array.isArray(id_flight) ? id_flight[0] : id_flight || "",
      price: Array.isArray(price) ? price[0] : price || ""
    },
  })
  
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    console.log(id_flight)
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">  

      <FormField
          control={form.control}
          name="id_vuelo"
          render={({ field }) => (
            <FormItem className="fixed-width-input h-16 w-80 border-gray-300 rounded-md">
              <FormLabel>Id Flight</FormLabel>
              <FormControl>
                <Input placeholder="id flight" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="documento"
          render={({ field }) => (
            <FormItem className="fixed-width-input h-16 w-80 border-gray-300 rounded-md">
              <FormLabel>Documento</FormLabel>
              <FormControl>
                <Input placeholder="Enter your document" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="fixed-width-input h-16 w-80 border-gray-300 rounded-md">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="fixed-width-input h-16 w-80 border-gray-300 rounded-md">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

      <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem className="fixed-width-input h-16 w-80 border-gray-300 rounded-md">
              <FormLabel>Lastname</FormLabel>
              <FormControl>
                <Input placeholder="Enter your lastname" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

      <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem className="fixed-width-input h-16 w-80 border-gray-300 rounded-md">
              <FormLabel>Price Flight</FormLabel>
              <FormControl>
                <Input placeholder="price flight" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
