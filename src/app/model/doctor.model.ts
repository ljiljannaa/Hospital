import { Schedule } from "./schedule.model";

export class Doctor {
    _id: number;
    name: string;
    lastName:string;
    specialty: string;
    age: number;
    schedule: Schedule;

    constructor(obj?:any) {
        this._id = obj && obj._id || 0;
        this.name = obj && obj.name || "";
        this.lastName = obj && obj.lastName || "";
        this.specialty = obj && obj.specialty || "";
        this.age = obj && obj.age || "";
        this.schedule = obj && obj.schedule && new Schedule(obj.schedule) || new Schedule();
    }
}