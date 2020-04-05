function permAlone(str) {

    const generatePermutations = (string) => { //given a string, this function will generate all possible charater permutations
        let allPermutations = [];

        /** Code goes here */

        return allPermutations;
    }

    const containsRepeat = (string) => { //evaluate a string to see if any of its characters repeat
        let mostRecentChar = "";
        for (let i = 0; i < string.length; i++) {

        /** Code goes here */

        }
    }

    let noRepeatsArray = [];
    let allPermutationsArray = generatePermutations(str);

    for (let i = 0; i < allPermutationsArray.length; i++) {
        let currentString = allPermutationsArray[i];


    }

    return str;
}
  
permAlone('aab');
  


/*** Thoughts on Tackling This Problem
 * Break up the string into letters?
 * Store each letter as a key in an object?
 * 
 * I need a helper function that generates permutations and stores each permutation in an array
 * 
 * Create an array that stores permutations that don't have repeating characters
 * 
 * Iterate through the permutation array
 *      Create a variable that stores the most recently seen character
 *      Iterate through each array string
 *          If current character equals the most recently seen character, skip to next array element
 *              Otherwise, set most recently seen character to current character and continue
 *          If I iterate successfully through an array string and no repeats were found, save the string in the array that stores non-repeating permutations
 *
 * Return the length of the array that stores non-repeating permutations
 *  
*/