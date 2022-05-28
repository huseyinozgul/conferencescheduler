import { Event } from "../event/Event";

export class Track {
    events: Event[] = [];

    constructor(public trackNo:number){}

    add(event: Event) {
        this.events.push(event);
    }
    print() {
        console.log(`Track ${this.trackNo}`);
        this.events.forEach(event => event.print());
    }
}