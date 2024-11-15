import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { categories, doctors } from "@/lib/data";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "./ui/button";
import Link from "next/link";
  
export default function DoctorsSection(isHome) {
  
  const filtered = isHome ? doctors.slice(0,6) : doctors;
  return (

  <div className="container  mx-auto ">
  <div className="flex justify-between container  mx-auto mt-6 mb-6 ">
    <h1 className="text-3xl font-semibold ">Doctors You Need</h1>
{
isHome ? <Link href={"/Doctors"}>

 <Button>See All</Button>
</Link>

: 

    <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Specilist " />
  </SelectTrigger>
  <SelectContent>
{
categories.map((category)=> <SelectItem key={category}value={category}>{category}

</SelectItem>
)

}


  </SelectContent>
</Select>
}
    </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
{
    filtered.map((doctor)=> <Card key={doctor.name}>
        <CardHeader>
            <CardTitle>{doctor.name}</CardTitle>
            <CardDescription>{doctor.category}</CardDescription>
        </CardHeader>
<CardFooter>
  
<CardFooter>
  <Link href={
    `/Doctors/${doctor.id}`
  }>
    <Button>See Details</Button>
        
  </Link>
  </CardFooter>
</CardFooter>


    </Card>)
}
  </div>
  </div>

  );
}
