import moment from 'moment';
import { getTimeFromHour } from '../../src/helpers/date.helper';

const event = 'Common Ruby Errors 45min';

describe('Date Helper Functions Test', () => {    
    test('getDurationFromString Function', () => {
        const time  = getTimeFromHour('09:00');
        expect(time).toBeInstanceOf(moment);
        expect(time.format('HH:mm')).toEqual('09:00');
    });

});