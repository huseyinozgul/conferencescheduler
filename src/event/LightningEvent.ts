import { Event } from "./Event";

export class LightningEvent extends Event {
    constructor(public title: string) {
        super(title, 'lightning', 5);
    }
}