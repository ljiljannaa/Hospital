import { AppDay } from "./app-day.model";
import { AppHour } from "./app-hours.model";

export class Appoinment {
    _id: number;
    doctorId: string;
    name: string;
    lastName: string;
    email:string;
    phone: string;
    day: AppDay;
    hour: AppHour;

    constructor(obj?:any) {
        this._id = obj && obj._id || 0;
        this.doctorId = obj && obj.doctorId || "";
        this.name = obj && obj.name || "";
        this.lastName = obj && obj.lastName || "";
        this.email = obj && obj.email || "";
        this.phone = obj && obj.phone || "";
        this.day = obj && obj.day && new AppDay(obj.day) || new AppDay();
        this.hour = obj && obj.day && new AppHour(obj.hour) || new AppHour();
    }
}