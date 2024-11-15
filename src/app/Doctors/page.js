import DoctorsSection from "@/components/dotorsSection";
import Header from "@/components/Header";
// import { doctors } from "@/lib/data";
import { categories, doctors } from "@/lib/data";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Button } from "@/components/ui/button";
export default function Doctors({searchParams}){
console.log("Serach Params==>>" ,searchParams);  

  return(
        <>
        <div className="flex justify-between container  mx-auto mt-6 mb-6 ">
<h1 className="text-3xl font-semibold">Doctors You Need</h1>



<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Specilist " />
  </SelectTrigger>
  <SelectContent>
{
categories.map((category)=> <SelectItem key={category}value={category}>{category}</SelectItem>
)

}


  </SelectContent>
</Select>


        </div>
        {/* <DoctorsSection/> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 container mx-auto mt-3">
            
  {
      doctors.map((doctor)=> <Card key={doctor.name}>
        <CardHeader>
            <CardTitle>{doctor.name}</CardTitle>
            <CardDescription>{doctor.category}</CardDescription>
        </CardHeader>
        <CardContent>
    <div className="flex  justify-between">
        <h1>Gender
            
        </h1>
        <h1>{doctor.gender}</h1>
    </div>
    <div className="flex  justify-between">
        <h1>Hospital</h1>
        <h1>{doctor.hospital}</h1>
    </div>
    <div className="flex  justify-between">
        
        <h1>Appointment Time</h1>
        <h1>{doctor.appointmentTime}</h1>
    </div>
  </CardContent>
  <CardFooter>
    <Button>Book Appointment</Button>
  </CardFooter>
    </Card>)
}
  

        </div>



        </>
    )
}