export class Room {
    public countAdult: number;
    public countChild: number;
    public age1: number;
    public age2: number;
    public age3: number;

    constructor() {
        this.countAdult=1;
        this.countChild=0;
        this.age1=1;
        this.age2=1;
        this.age3=1;
    }
    public getAge(age :number)
    {
        if(age==1) return this.age1;
        if(age==2) return this.age2;
        if(age==3) return this.age3;
    }
}