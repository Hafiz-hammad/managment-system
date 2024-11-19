import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Link } from "lucide-react"
import Link from "next/link"
// import { Button } from "react-day-picker";
import { Button } from "@/components/ui/button"
<<<<<<< HEAD
import { auth, signOut } from "@/auth";
=======
import { auth } from "@/auth";
>>>>>>> df3692ed0a421e9a2c370a270e7315c3bb8a3819
import Image from "next/image";
export default async function  Header(){
  let session = await auth();
  // session = null;
  return(
    <div className="bg-secondary py-3">
<div className="flex justify-between container mx-auto" >
<h1 className="font-mono text-xl font-bold">Logo

</h1>

{
  session ?
<Menubar>
  <MenubarMenu>
    <MenubarTrigger className="border-none  bg-transparent p-0 m-0">
        <Image src={session?.user?.image}
        height={40}
        width={40}
        className="rounded-full"
        />
          
         </MenubarTrigger>
    <MenubarContent>
      <MenubarSeparator />
      <Link href={'/Profile'}>
      <MenubarItem>Profile</MenubarItem>
      <MenubarSeparator />
      </Link>
      <Link href={'/Appointments'}>
      <MenubarItem>My Appointments</MenubarItem>
      </Link>
      <form
      action={async () => {
        "use server"
        await signOut("google")
      }}
    >
        <Button variant='outline'>LogOut</Button>
    </form>

      
    </MenubarContent>
  </MenubarMenu>
</Menubar>

: <Link href={'/singin'}>
<Button variant="outline">Login</Button>
</Link>

}

</div>
    </div>
    )
}
