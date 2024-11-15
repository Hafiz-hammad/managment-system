import { columns } from "@/components/AppointmentTable/columns";
import { AppointmentTable } from "@/components/AppointmentTable/data-table";
import { appointments } from "@/lib/data";

export default function Appointments(){
    return(
        <div className="mx-auto container">
            <div className="py-20 container mx-auto">

            <AppointmentTable columns={columns} data={appointments}/>
            </div>
        </div>
    )
    }