export class AppDay {
    year: number;
    month: number;
    day: number;

    constructor(obj?:any) {
        this.year = obj && obj.year || 0;
        this.month = obj && obj.month || 0;
        this.day = obj && obj.day || 0;
    }
}