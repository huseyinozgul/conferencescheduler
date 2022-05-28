import moment from "moment";
import { getTimeFromHour } from "../helpers";
import { Event } from "./Event";

export class LunchEvent extends Event {
    constructor(public title: string = 'Lunch') {
        super(title, 'lunch', 60);

        this.startTime = moment(getTimeFromHour('12:00'));
    }
}