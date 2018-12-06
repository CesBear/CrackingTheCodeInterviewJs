

const checkPermute =  (stringOne, stringTwo) => {

    if (stringOne.length !== stringTwo.length) {
        return false;
    }
    else {
        let sortedStringOne = stringOne.split('').sort().join('');
        let sortedStringTwo = stringTwo.split('').sort().join('');

        return sortedStringOne === sortedStringTwo;
    }
};

module.exports = checkPermute;