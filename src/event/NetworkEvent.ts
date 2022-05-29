import moment, { Moment } from "moment";
import { getTimeFromHour } from "../helpers";
import { Event } from "./Event";

export class NetworkEvent extends Event {
    constructor(startTime: Moment) {
        super("Networking Event", 'networking');

        const [start, end] = NetworkEvent.getNetworkingStartEndDefault();

        if (startTime.isSameOrAfter(end) && startTime.isBefore(start))
            throw new Error('Lunch event must be between 16:00-17:00');

        this.startTime = moment(startTime);
        this.duration = moment.duration(end.diff(this.startTime)).asMinutes();
    }

    static getNetworkingStartEndDefault(): [Moment, Moment] {
        const start = getTimeFromHour('16:00');
        const end = getTimeFromHour('17:00');

        return [start, end];
    }
}