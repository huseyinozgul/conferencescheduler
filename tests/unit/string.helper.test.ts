import moment from 'moment';
import { getLastWord } from '../../src/helpers/string.helper';

const event = 'Common Ruby Errors 45min';

describe('String Helper Functions Test', () => {
    test('getLastWord function', () => {

        const eventLastWord = getLastWord(event);
        expect(eventLastWord).toEqual("45min");

    });
});