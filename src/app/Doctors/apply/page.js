import DoctorForm from "@/components/applyForm";

export default function ApplyAsDoctor(){
    return(
        <>
        <div className="container mx-auto">
<h1 className="font-bold text-2xl">Apply As A Doctor In Our Platform</h1>
{/* <p className="text-secondary-foreground"> */}

    <p className="text-secondary-foreground mt-5">
Are you a dedicated, qualified medical professional looking to expand your practice and reach more patients? Join our healthcare platform, where we connect experienced doctors like you with individuals in need of exceptional medical care. By joining our network, you’ll have the chance to increase your visibility, manage appointments easily, and grow your patient base through our trusted and user-friendly platform.
    {/* <p/> */}
    </p>

    <DoctorForm/>
        </div>
        </>
    )
}