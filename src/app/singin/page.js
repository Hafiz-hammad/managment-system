import { auth, signIn } from "@/auth"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation";

export default async function Singin(){
const session = await auth();
if(session) redirect('/')
    return(
    <div className="min-h-screen flex container mx-auto justify-center items-center">
        <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
        <Button variant='outline'>Contine With Google</Button>
    </form>

    </div>
    )
}