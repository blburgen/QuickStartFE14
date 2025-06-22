import type { Appointment } from "../types";

type Props = {
    appointment: Appointment,
    deleteAppointment: (id: number) => void,
    updateAppointment: (property: string, value: string, id?: number) => void,
}

export default function Item({appointment, deleteAppointment, updateAppointment}: Props){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 col-12">
                    
                    {appointment.time}
                </div>
                <div className="col-md-10 col-12 mb-3">
                    {appointment.desc}
                    <button className="btn btn-outline-primary ms-3" onClick={() => updateAppointment(appointment.id)}>update</button>
                    <button className="btn btn-outline-danger ms-3" onClick={() => deleteAppointment(appointment.id)}>X</button>
                </div>
            </div>
        </div>
    )
}