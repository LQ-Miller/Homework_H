const Istack = require('./Stack');

describe('push', () => {

    it(`push value 'abc' return true`, () => {
        expect(Istack.push('abc')).toBe(true);
    })
});

describe('peek', () => {
    it('should value on top', () => {
        expect(Istack.peek()).toBe('abc');
    });
});

describe('isEmpty', () => {
    it('should return false', () => {
        expect(Istack.isEmpty()).toBe(false);
    });
});

describe('contains', () => {
    it(`Find value 'abc' and should return true`, () => {
        expect(Istack.contains('abc')).toBe(true);
    });
});

describe('clear', () => {
    it('Should empty ', () => {
        Istack.clear();
        expect(Istack.isEmpty()).toBe(true);
    });

});