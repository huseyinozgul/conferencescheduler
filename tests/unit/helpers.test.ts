import moment from 'moment';
import { getLastWord, getDurationFromString, getTimeFromHour } from '../../src/helpers';

const event = 'Common Ruby Errors 45min';

describe('Helpers Test', () => {
    test('getLastWord function', () => {

        const eventLastWord = getLastWord(event);
        expect(eventLastWord).toEqual("45min");

    });

    test('getDurationFromString', () => {
        const duration = getDurationFromString('45min');
        expect(duration).toEqual(45);
    });

    test('getDurationFromString', () => {
        const time  = getTimeFromHour('09:00');
        expect(time).toBeInstanceOf(moment);
        expect(time.format('HH:mm')).toEqual('09:00');
    });

});