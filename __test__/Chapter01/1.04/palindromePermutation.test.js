const palimPerm = require('../../../exercises/Chapter01/1.04/palindromePermutation');


test('', () => {
    expect(palimPerm('Tact Coa')).toBe(true);
});

test('checking palindrome Permutation', () => {
    expect(palimPerm('Tact boa')).toBe(false);
});

test('checking palindrome Permutation', () => {
    expect(palimPerm('aabbc')).toBe(true);
});

test('checking palindrome Permutation', () => {
    expect(palimPerm('aabc')).toBe(false);
});
