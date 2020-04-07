function permAlone(str) {

    const swapTwoCharsString = (string) => { //given a string, swap the first two chars and return only the first two
        return string[1] + string[0]; //if the string is longer than two characters, ignore everything after the first two
    }

    const swapTwoCharsArray = (array) => { //given an array of two chars, swap and return them
        let newArray = [array[1], array[0]];
        return newArray;
    }

    const generatePermutations = (string) => { //given a string, this function will generate all possible charater permutations
        let allPermutations = [];

        /** Code goes here */

        return allPermutations;
    }

    const containsRepeat = (string) => { //evaluate a string to see if any of its characters repeat
        let mostRecentChar = "";
        for (let i = 0; i < string.length; i++) { //iterate through string
            let currentChar = string[i];

            if (currentChar === mostRecentChar) { //a repeating character was found
                return true;
            }
            else {
                mostRecentChar = currentChar //set the most recently seen char to this current char
            }
        }

        return false; //a repeating character hasn't been found, so return false
    }


    let allPermutationsArray = generatePermutations(str);
    let noRepeatsArray = [];

    for (let i = 0; i < allPermutationsArray.length; i++) {
        let currentString = allPermutationsArray[i];
        if (!containsRepeat(currentString)) {
            noRepeatsArray.push(currentString);s
        }
    }

    return noRepeatsArray.length;
}
  
permAlone('aab');
  

/*** Permutation Practice
 * 
 * Given: 
 * let str = "abcd"
 * let arrPerm = []
 * 
 * Return:
 * an array of permutations
 * 
 * Iterate:
 * let i = 0
 * str[i] is now "a"
 *  don't swap. push current iteration to arrPerm: "abcd"
 *  swap "a" through: "bacd" "bcad" "bcda"
 * iterate to the next position. str[i] is now "b"
 *  swap "b" through: "acbd" "acdb"
 * iterate to the next position. str[i] is now "c"
 *  swap "c" through: "abdc"
 * ...
 * 
 * 
 * 
 * for each character in string:
 * set it to be the first position...
 * 
 * 
 * breaking down this problem using recursion:
 * 
 * I have a string, "abcd"
 * I'll set "a" to take up the first slot.
 * I will recursively call "bcd"
 *  I'll set "b" to take up the first slot.
 *  I will recursively call "cd"
 *      I'll set up "c" to take up the first slot.
 *      I will recursively call "d"
 *          I'll set up "d" to take up the first slot.
 *              I will recursively call "d"
 *                  I have an empty string. Return ""
 *              I will add "" to "d". Return "d"
 *          I will add "d" to "c" and I now have "cd". Return "cd"
 *      I will add 
 * 
 * 
 * 
 * 
 *
 */







/*** Thoughts on Tackling This Problem
 * 
 * I need a helper function that generates permutations and stores each permutation in an array
 * 
 * Create an array that stores permutations that don't have repeating characters
 * 
 * Iterate through the permutation array
 *      Create a variable that stores the most recently seen character
 *      Iterate through each array string -- use a helper function
 *          If current character equals the most recently seen character, skip to next array element
 *              Otherwise, set most recently seen character to current character and continue
 *          If I iterate successfully through an array string and no repeats were found, save the string in the array that stores non-repeating permutations
 *
 * Return the length of the array that stores non-repeating permutations
 * 
 * 
 * How to Generate Permutations?
 *  It involves iterating and swapping...
 *  I should also do it on paper and implement.
 *      
 *  
*/