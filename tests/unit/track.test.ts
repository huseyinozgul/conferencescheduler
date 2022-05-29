import { TalkingEvent, LightningEvent, LunchEvent, NetworkEvent, EventFactory, Event } from '../../src/event';
import { getTimeFromHour } from '../../src/helpers';
import { Track } from '../../src/track';

const talkingEvent = 'Common Ruby Errors 45min';
const lightningEvent = 'Developers lightning';

describe('Track Test', () => {
    test('Valid Track', () => {
        const track = new Track(1);
        expect(track).toBeInstanceOf(Track);
        expect(track.events).toBeInstanceOf(Array);

    });
});