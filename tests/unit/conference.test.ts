import { Conference } from '../../src/conference';
import { TalkingEvent, LightningEvent, LunchEvent, NetworkEvent, EventFactory, Event } from '../../src/event';
import { getTimeFromHour } from '../../src/helpers';
import { Track } from '../../src/track';

const talkingEvent = 'Common Ruby Errors 45min';
const lightningEvent = 'Developers lightning';

describe('Conference Unit Test', () => {
    test('Check Properties', () => {
        const conference = new Conference();
        expect(conference).toBeInstanceOf(Conference);
        expect(conference.tracks).toBeInstanceOf(Array);
    });

    test('Can Add New Track', () => {
        const conference = new Conference();
        const track = conference.addTrack();
        expect(track).toBeInstanceOf(Track);
        expect(track.trackNo).toEqual(1);
    });
});