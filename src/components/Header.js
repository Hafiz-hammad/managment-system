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
import { TypeOutline } from "lucide-react";
import { Button } from "@/components/ui/button"
import { auth } from "@/auth";
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
    <MenubarTrigger className="border-none">
        
    <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>DAS</AvatarFallback>
</Avatar>

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
      <MenubarItem>LogOut</MenubarItem>
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