export class WorkDay {
    start: string;
    end: string;
    

    constructor(obj?:any){
        this.start = obj && obj.start || "";
        this.end = obj && obj.end || "";
    }

    isWorkingHour(hour: number, minute:number) : boolean {
        let startHour = parseInt(this.start.split(":")[0]);
        let startMinute = parseInt(this.start.split(":")[1]);

        let endHour = parseInt(this.end.split(":")[0]);
        let endMinute = parseInt(this.end.split(":")[1]);

        if(startHour < hour && endHour > hour) {
            return true;
        }

        if( startHour <= hour && startMinute <= minute && endHour >= hour) {
            return true;
        }
        return false;
    }
}