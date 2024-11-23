import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
import { auth } from "@/auth"
export default async function HeroSection(){
  const session = await auth();
    return(
        <section className="text-gray-600 my-10 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mx-auto container">
      <h1 className="font-semibold sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
        DOCTOR OPPOINTMENT SYSTEM
        <br className="hidden lg:inline-block" />
        BY BAWANY
      </h1>
      <p className="mb-8 leading-relaxed">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.
      </p>
      <div className="flex justify-center gap-5">
        <Button variant="outline">Find Doctor You Need</Button>
       <Link href={ session? '/Doctors/apply': '/singin'}>
        <Button>Apply as a doctor</Button>
       </Link>
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-end">
      <Image
        className="object-cover object-center rounded"
        height={400}
        width={400}
        alt="hero"
        src="https://images.unsplash.com/photo-1605684954998-685c79d6a018?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  </div>
</section>

    )
}