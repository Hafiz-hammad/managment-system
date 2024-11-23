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
import { DatePicker } from "./datePicker"
import { Textarea } from "@/components/ui/textarea"
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { addRequest } from "@/actions/requests"
import { useToast } from "@/hooks/use-toast"

// import { Select } from "@/components/ui/select"

 // Assuming DatePicker component exists
// 
const formSchema = z.object({
  bio: z.string().min(2, "Bio should be at least 20 characters").max(120, "Bio should not exceed 120 characters"),
  hospital: z.string().min(2, "Hospital should be at least 5 characters").max(50, "Hospital should not exceed 50 characters"),
  gender: z.string(),
  appointmentTime: z.date(),
  degree: z.string().min(2, "Degree is required"),
  specialization: z.string().min(2, "Specialization is required"),
  experience: z.string().min(1, "Experience is required"),
  number: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number"),
  email: z.string(),
  address: z.string().min(5, "Address should be at least 5 characters"),
})

export default function DoctorForm({session }) {
  const { toast } = useToast()
  const {getRootProps, getInputProps, open} = useDropzone({noClick: true})

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      bio: "",
      hospital: "",
      gender: "",
      appointmentTime: new Date(),
      degree: "",
      specialization: "",
      experience: "",
      number: "",
      email: "",
      address: "",
    },
  })

  async function onSubmit(values)  {
    values.user = session.user._id;
    const response = await addRequest(values);
    console.log("value  Is here==>>> ",values)
    console.log("Response  Is here==>>> ",response)
    if (response.error){
      
    form.reset();
    toast({
      title: "Sorry , your application can no  be submitted",
      description: response.msg,
    })}
    else{
    
    form.reset();
    toast({
      title: "Your application is submitted.",
      description: "You will be inform by email in 3 buisnes days.",
    });
    
  
  };
     }
return (
    
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
<div className="">
        <div className="grid grid-cols-1 gap-5">
        
        <FormField
          name="bio"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea placeholder="Short bio" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
          </div>

          <div className="grid grid-cols-2 gap-5">
        <FormField
          name="hospital"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Hospital</FormLabel>
              <FormControl>
                <Input placeholder="Hospital name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />

          </div>

          <div className="gap-5 grid grid-cols-2">
        <FormField
          name="gender"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Gender</FormLabel>
              <FormControl>
                <Input placeholder="Enter gender" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />

        <FormField
          name="appointmentTime"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Appointment Time</FormLabel>
              <FormControl>
<DatePicker />
                 </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
          </div>

          <div className="gap-5 grid  grid-cols-2">
        <FormField
          name="degree"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Degree</FormLabel>
              <FormControl>
                <Input placeholder="Enter your degree" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />

        <FormField
          name="specialization"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Specialization</FormLabel>
              <FormControl>
                <Input placeholder="Enter specialization" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />

          </div>
                  <div className="gap-5 grid grid-cols-2">
        <FormField
          name="experience"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Experience</FormLabel>
              <FormControl>
                <Input placeholder="Years of experience" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />


          <div className="grid grid-cols-2 gap-5">
        <FormField
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Contact number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />

        <FormField
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
          </div>
          </div>
          <div className="grid grid-cols-2 gap-5">

        <FormField
          name="address"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Your address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
          </div>
          </div>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
