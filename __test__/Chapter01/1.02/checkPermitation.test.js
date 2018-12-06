const checkPermitation = require('../../../exercises/Chapter01/1.02/checkPermutation');

test('Validate negative scenario ', () => {
    expect(checkPermitation('palafox', 'perro')).toBe(false);
});

test('Validate a positive scenario ', () => {
    expect(checkPermitation('mariano', 'oanimra')).toBe(true);
});

test('Positive scenario', () => {
    expect(checkPermitation('carbon', 'bocarn')).toBe(true);
});

test('Check string vs number negative test', ()=>{
   expect(checkPermitation('1 2 test', 12212)).toBe(false);
});