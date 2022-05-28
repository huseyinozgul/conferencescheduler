import moment, { Moment } from "moment";
import { getTimeFromHour } from "../helpers";
import { Event } from "./Event";

export class NetworkEvent extends Event {
    constructor(startTime: Moment) {
        super("Networking Event", 'networking');

        const netStart = getTimeFromHour('16:00');
        const endTime = getTimeFromHour('17:00');

        if (startTime.isSameOrAfter(endTime) && startTime.isBefore(netStart))
            throw new Error('Lunch event must be between 16:00-17:00');

        this.startTime = moment(startTime);
        this.duration = moment.duration(endTime.diff(this.startTime)).asMinutes();
    }
}