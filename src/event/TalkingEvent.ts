import { Event } from "./Event";

export class TalkingEvent extends Event {
    constructor(title: string, duration: number){
        super(title,'talk', duration);
    }
}