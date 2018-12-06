const uniqueChars = require('../../../exercises/Chapter01/1.01/isUnique');

test('Validate that chars are not unique result is false', () => {
    expect(uniqueChars("ana")).toBe(false);
});

test('Validate unique chars', () => {
    expect(uniqueChars("ano")).toBe(true);
});

test('Validate numbers', () => {
    expect(uniqueChars(1213213)).toBe(true);
});

test('Validate white spaces not allowed or validated', () => {
    expect(uniqueChars("unos lo")).toBe(false);
});