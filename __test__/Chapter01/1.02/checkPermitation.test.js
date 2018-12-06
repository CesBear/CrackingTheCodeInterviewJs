const checkPermitation = require('../../../exercises/Chapter01/1.02/checkPermutation');

test ('Validate negative scenario ', () => {
    expect(checkPermitation('palafox', 'perro')).toBe(false);
});

test ('Validate ', () => {
    expect(checkPermitation('mariano', 'oanimra')).toBe(true);
});

test ('Validate ', () => {
    expect(checkPermitation('carbon', 'bocarn')).toBe(true);
});