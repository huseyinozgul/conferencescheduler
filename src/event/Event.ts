import moment, { Moment } from "moment";
import { EventType, Session } from "./EventTypes";
import { getTimeFromHour } from "../helpers";

export abstract class Event {
    private _startTime: Moment = moment();
    private _session: Session = 'morning';
    private _endTime!: Moment;
    private _duration: number = 0;

    constructor(public title: string, public eventType: EventType, duration?: number) {
        if (duration) this._duration = duration;
    }

    get session(): Session {
        return this._session;
    }

    get endTime(): Moment {
        return this._endTime;
    }

    get startTime(): Moment {
        return this._startTime;
    }

    set startTime(value: Moment) {
        this._startTime = value.clone();
        this._session = value.isBefore( getTimeFromHour('12:00')) ? 'morning' : 'afternoon';
        this._endTime = value.clone().add(this.duration, 'minute');
    }
    get duration(): number {
        return this._duration;
    }

    set duration(value: number) {
        this._duration = value;
        this._endTime = moment(this._startTime).add(value, 'minute');
    }

    print() {
        console.log(`${this.startTime.format('hh:mm A')} ${this.title}`);
    }
}