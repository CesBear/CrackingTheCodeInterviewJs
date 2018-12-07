
/*


Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.
A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
The palindrome does not need to be limited to just dictionary words.

I: String
O: Boolean
C: Optimize
E: empty string, spaces beetwen the chars in front and end, more than 2 of the same char, even and odd chars.

 */


let palinPerm = (s)=> {
    // create object literal to store charcount
    var chars = {};
    var currChar;
    var mulligan = false;
    var isPerm = true;
    // pump characters in, spaces not counted, all lowercase
    s.split('').forEach((char) => {
        if (char !== ' ') {
            currChar = char.toLowerCase();
            if (chars[currChar] === undefined) {
                chars[currChar] = 0;
            }
            chars[currChar]++;
        }
    });
    // check that all chars are even count, except for one exception
    Object.keys(chars).forEach((char) => {
        if (chars[char] % 2 > 0) {
            // if more than one exception, return false
            if (mulligan) {
                isPerm = false; // return in a forEach statment doesn't flow out of function scope
            } else {
                mulligan = true;
            }
        }
    });
    // if not return true
    return isPerm;
};

module.exports = palinPerm;