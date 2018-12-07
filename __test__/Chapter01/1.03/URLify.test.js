const urlifyChecker = require('../../../exercises/Chapter01/1.03/URLify');

test('3 spaces', () => {
    expect(urlifyChecker('Mr John Smith ', 13)).toEqual('Mr%20John%20Smith');
});

test('3 spaces and 14 as a number', () => {
    expect(urlifyChecker('Mr John Smith ', 14)).toEqual('Mr%20John%20Smith%20');
});

test('Two char word and 7 as a number', () => {
    expect(urlifyChecker('   hi', 7)).toEqual('%20%20%20hi%20%20');
});

test('Two char word and 3 as a number', () => {
    expect(urlifyChecker('   hi ', 3)).toEqual('%20hi');
});

test('No spaces', () => {
    expect(urlifyChecker('', 0)).toEqual('');
});

test('NO spaces and 2 as a number', () => {
    expect(urlifyChecker('', 2)).toEqual('%20%20');
});

test('1 space and 2 words', () => {
    expect(urlifyChecker('hel lo', 5)).toEqual('hello');
});
