/**
 * 1.01 Implement an algorithm to determine if a string has
 * all unique characters. What if you cannot use additional data structures? *
 *
 */
const uniqueChars = (string) => {

    let length = string.length;

    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (string[i] === string[j]) {
                return false;
            }
        }
    }
    return true;
};



module.exports = uniqueChars;




