import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "bootstrap"
import Navigation from "./component/Navigation"
import Sidebar from "./component/Sidebar"
import ItemList from "./component/ItemList"
import { useState } from "react"
import type { Appointment } from "./types"

const TEST_APPOINTMENTS =[
  {
      id: 1,
      time: "2025-06-01",
      desc: "Go to doctors"

  },
  {
      id: 2,
      time: "2025-06-02",
      desc: "Go to Bed"

  },
  {
      id: 3,
      time: "2025-06-02",
      desc: "Get married"

  },
]

export default function App() {
  const [ appointments, setAppointments ] = useState<Appointment[]>(TEST_APPOINTMENTS)

  let sortedAppointments = appointments.slice().sort((a, b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0))

  const deleteAppointment = (idToDelete:number) => {
    setAppointments( appointments.filter(s=>s.id !== idToDelete))
  }

  const updateAppointment = (property:string, newValue:string, idToUpdate?: number) => {
    if(idToUpdate === undefined){
      return
    }

    setAppointments(currentAppointment => currentAppointment.map(appointment => (
      appointment.id !== idToUpdate ? appointment: {
        ...appointment,
        [property]:newValue
      }
    )))
  }

  const addAppointment = (time: string, desc: string) => {
    const newAppointment = {
            id: appointments.length ? appointments[appointments.length - 1].id + 1 : 0,
            time: time,
            desc: desc,
        }  

    setAppointments([...appointments, newAppointment])
  }
  
  return (
    <>
      <Navigation />
      <h1 className="text-center">Quick Start Front End Weeks 14-16 Assignement</h1>
      <h1 className="text-center">Under Construction</h1>
      <div className="d-flex flex-column">
        <div className="d-flex flex-grow-1">
          <Sidebar 
            // appointments = {appointments}
            addAppointment = {addAppointment}
            // updateAppointment = {updateAppointment}
          />
          <div className="flex-grow-1">
            <ItemList 
              appointments={sortedAppointments}
              deleteAppointment={deleteAppointment}
              updateAppointment={updateAppointment}
            />
          </div>
        </div>
      </div>   
    </>
  )
}

