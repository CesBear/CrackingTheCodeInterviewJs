/**
 * 1.01 Implement an algorithm to determine if a string has
 * all unique characters. What if you cannot use additional data structures? *
 *
 */

const areCharsUnique =(string) => {

    let length = string.length;

    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (length[i] === length[j]) {
                return false;
            }
        }
    }
    return true;
};








