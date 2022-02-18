import { WorkDay } from "./work-day.model";

export class Schedule {
    doctor_id : number;
    monday: WorkDay;
    tuesday: WorkDay;
    wednesday: WorkDay;
    thursday: WorkDay;
    friday: WorkDay;

    constructor(obj?:any) {
        this.doctor_id = obj && obj.doctor_id || 0;
        this.monday = obj && obj.monday && new WorkDay(obj.monday) || new WorkDay();
        this.tuesday = obj && obj.tuesday && new WorkDay(obj.tuesday) || new WorkDay();
        this.wednesday = obj && obj.wednesday && new WorkDay(obj.wednesday) || new WorkDay();
        this.thursday = obj && obj.thursday && new WorkDay(obj.thursday) || new WorkDay();
        this.friday = obj && obj.friday && new WorkDay(obj.friday) || new WorkDay();
    }
}