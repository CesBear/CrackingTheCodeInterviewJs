/*
Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the
end to hold the additional characters, and that you are given the "true" length of the string.
 */

const urlifyChecker = (str, n = str.length) => {

    let out = '';
    let chars = 0;

    for (let i = 0; i <str.length; i++){
        let c = str[i];
        if(c !== ' ') {
            chars++
        }
    }

    let spaces = n - chars;

    for (let i =0; i<str.length; i++) {
        let c = str[i];
        if (c === ' ' && spaces > 0) {
            out += '%20';
            spaces--;
        } else if ( c !== ' ') {
            out += c;
        }
    }

    while (spaces > 0 ) {
        out += '%20';
        spaces--;
    }

    return out;
};

module.exports = urlifyChecker;




