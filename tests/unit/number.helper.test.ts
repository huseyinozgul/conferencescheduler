import { getDurationFromString } from '../../src/helpers/number.helper';

describe('Number Helper Functions Test', () => {
    test('getDurationFromString', () => {
        const duration = getDurationFromString('45min');
        expect(duration).toEqual(45);
    });
});