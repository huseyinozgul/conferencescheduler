import { EventFactory, LunchEvent, NetworkEvent } from "../event";
import { getTimeFromHour } from "../helpers";
import { Conference } from "./conference";

export class ConferenceFactory {
    static createConference(eventList: string[]): Conference {
        if (!eventList || eventList.length === 0) {
            throw Error('Invalid event list!');
        }

        const conference = new Conference();

        const [networkDefaultStart, networkDefaultEnd] = NetworkEvent.getNetworkingStartEndDefault();

        const defaultStartTime = getTimeFromHour('09:00');

        let startTime = defaultStartTime.clone();

        let track = conference.addTrack();

        for (let n = 0; n < eventList.length; n++) {

            const event = EventFactory.createEvent(eventList[n]);
            if (!event) continue;

            event.startTime = startTime;

            if (event.endTime.isAfter(getTimeFromHour('12:00')) && event.endTime.isBefore(getTimeFromHour('13:00'))) {
                const lunch = new LunchEvent();
                track.add(lunch);
                event.startTime = lunch.endTime.clone();
            }

            if (event.endTime.isSameOrAfter(networkDefaultStart)) {

                const networkStartAt = event.endTime.clone();
                const networking = new NetworkEvent(networkStartAt);

                const isLastEvent = event.endTime.isSameOrBefore(networkDefaultEnd);

                if (isLastEvent) {
                    track.add(event);
                }

                track.add(networking);
                track = conference.addTrack();

                if (isLastEvent) {
                    startTime = defaultStartTime.clone();
                    continue;
                }

                event.startTime = defaultStartTime.clone();
            }


            track.add(event);
            startTime = event.endTime.clone();
        }

        return conference;
    }
}