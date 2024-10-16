/* eslint-disable no-use-before-define */
/* eslint-disable quotes */
/* eslint-disable indent */
/**
 * Capitalizes the first letter of the first name and converts the last name to uppercase.
 * @param {string} name - A string containing exactly two words (first and last name).
 * @returns {string} The capitalized first name and uppercased last name.
 * @throws {TypeError} If the input is not a string.
 * @throws {Error} If the input does not contain exactly two words.
 */
function capitalizeLastName(name) {
    if (typeof name !== 'string') {
        throw new TypeError("The argument must be a string.");
    }

    const words = name.trim().split(' ');

    if (words.length !== 2) {
        throw new Error("The string must contain exactly two words.");
    }

    const [firstName, lastName] = words;
    const capitalizedFirstName = capitalizeWord(firstName);
    const capitalizedLastName = lastName.toUpperCase();

    return `${capitalizedFirstName} ${capitalizedLastName}`;
}

/**
 * Capitalizes the first letter of a word and makes the rest lowercase.
 * @param {string} word - The word to capitalize.
 * @returns {string} The capitalized word.
 */
function capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

module.exports = capitalizeLastName;
