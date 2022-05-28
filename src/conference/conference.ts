import { EventFactory, LunchEvent, NetworkEvent } from "../event";
import { getTimeFromHour } from "../helpers";
import { Track } from "../track";

export class Conference {
    private _tracks: Track[] = [];

    get tracks(): Track[] {
        return this._tracks;
    }

    getCurrentTrack(): Track | undefined {
        const tracksN = this._tracks.length - 1;

        if (tracksN < 0) return undefined
        
        return this._tracks[tracksN];
    }

    addTrack(): Track {
        const track = new Track(this._tracks.length+1);
        this._tracks.push(track);
        return track;
    }

    print() {
        console.log('tracks', this.tracks);
        this.tracks.forEach(track => track.print());
    }

    static createConference(eventList: string[]): Conference {
        if (!eventList || eventList.length === 0) {
            throw Error('Invalid event list!');
        }

        const conference = new Conference();

        let startTime = getTimeFromHour('09:00');
        
        let track = conference.addTrack();

        for (let n = 0; n < eventList.length; n++) {

            const event = EventFactory.createEvent(eventList[n]);
            if (!event) continue;

            event.startTime = startTime;

            if (event.endTime.isSameOrAfter(getTimeFromHour('16:00'))) {
                const networkStartAt = event.endTime.clone();
                const networking = new NetworkEvent(networkStartAt);
                track.add(networking);

                track = conference.addTrack();
                event.startTime = getTimeFromHour('09:00'); 
            }

            if (event.endTime.isAfter(getTimeFromHour('12:00')) && event.endTime.isBefore(getTimeFromHour('13:00'))) {
                const lunch = new LunchEvent();
                track.add(lunch);
                event.startTime = lunch.endTime.clone();
            }

            track.add(event);
            startTime = event.endTime.clone();
        }

        return conference;
    }
}