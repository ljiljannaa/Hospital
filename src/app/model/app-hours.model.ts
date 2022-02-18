export class AppHour {
    hour: number;
    minute:number;
    second: number;

    constructor(obj?:any) {
        this.hour = obj && obj.hour || 0;
        this.minute = obj && obj.minute || 0;
        this.second = obj && obj.second || 0;
    }
}