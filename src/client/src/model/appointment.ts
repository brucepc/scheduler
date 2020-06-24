import {Doctor} from "./doctor";
import {Customer} from "./customer";

export class Appointment {
  id: string;
  appointmentDate: Date;
  doctor: Doctor;
  customer: Customer;
  status: 'BEING_CREATED' | 'FULFILLED' | 'DONE' | 'CANCELED';
}
