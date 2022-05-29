import { TalkingEvent, LightningEvent, LunchEvent, NetworkEvent, EventFactory, Event } from '../../src/event';
import { getTimeFromHour } from '../../src/helpers';

const talkingEvent = 'Common Ruby Errors 45min';
const lightningEvent = 'Developers lightning';

describe('Event Unit Test', () => {
    test('Talking Event', () => {
        const event = EventFactory.createEvent(talkingEvent);
        expect(event).toBeInstanceOf(TalkingEvent);
        expect(event?.eventType).toEqual('talk');
    });
    test('Lightning Event', () => {
        const event = EventFactory.createEvent(lightningEvent);
        expect(event).toBeInstanceOf(LightningEvent);
        expect(event?.eventType).toEqual('lightning');
        expect(event?.duration).toEqual(5);
    });
    test('Lunch Event', () => {
        const event = new LunchEvent();
        expect(event).toBeInstanceOf(Event);
        expect(event?.eventType).toEqual('lunch');
        expect(event?.startTime).toEqual(getTimeFromHour('12:00'));
    });
    test('Network Event', () => {
        const event = new NetworkEvent(getTimeFromHour('17:00'));
        expect(event).toBeInstanceOf(Event);
        expect(event?.eventType).toEqual('networking');
    });
    test('Invalid talking event', () => {
        const event = EventFactory.createEvent('');
        expect(event).toBeUndefined();
    });
});