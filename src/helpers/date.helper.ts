import moment, { Moment } from "moment";

export const getTimeFromHour = (HHmm: string = '09:00'): Moment => {
    return moment(HHmm, 'HH:mm');
}