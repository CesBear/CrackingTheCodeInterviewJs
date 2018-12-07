/*
Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the
end to hold the additional characters, and that you are given the "true" length of the string.

I (input): Sting, number
O (output): String
C (constrains): optimize
E (Edge cases): empty string, spaces in front, middle and end

 */


const urlifyChecker = (str, n = str.length) => {

//first pass: count the number of non space chars in the string
//subtract chars from true length n to se how many spaces we are allow to replace with  %20

//second pass: if we see a space and there are still spaces left, append %20 to output string
//otherwise copy current character
//when run out of spaces, append the empty string
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




