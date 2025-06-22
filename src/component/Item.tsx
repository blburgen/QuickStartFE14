import { useState } from "react";
import type { Appointment } from "../types";
import { Modal } from "react-bootstrap";
import EditForm from "./EditForm";

type Props = {
    appointment: Appointment,
    deleteAppointment: (id: number) => void,
    updateAppointment: (property: string, value: string, id?: number) => void,
}

export default function Item({appointment, deleteAppointment, updateAppointment}: Props){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClose = () =>setIsModalOpen(false);
    const handleShow = () => setIsModalOpen(true);

    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 col-12">
                        
                        {appointment.time}
                    </div>
                    <div className="col-md-10 col-12 mb-3">
                        {appointment.desc}
                        <button className="btn btn-outline-primary ms-3" onClick={handleShow}>update</button>
                        <button className="btn btn-outline-danger ms-3" onClick={() => deleteAppointment(appointment.id)}>X</button>
                    </div>
                </div>
            </div>
            <Modal show={isModalOpen} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Description</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm
                        updateAppointment={updateAppointment}
                        handleClose={handleClose}
                        selectedAppointment={appointment}
                    />
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>
        
    )
}