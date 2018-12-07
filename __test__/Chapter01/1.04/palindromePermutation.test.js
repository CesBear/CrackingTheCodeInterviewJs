const palimPerm = require('../../../exercises/Chapter01/1.04/palindromePermutation');


test('', () => {
    expect(palimPerm('Tact Coa')).toBe(true);
});

test('checking palindrome Permutation', () => {
    expect(palimPerm('Tact boa')).toBe(false);
});

test('checking palindrome Permutation', () => {
    expect(palimPerm(' rac ecar rara')).toBe(true);
});

test('One word 4 chars', () => {
    expect(palimPerm('aabc')).toBe(false);
});


test('Empty string', () => {
    expect(palimPerm('')).toBe(true);
});