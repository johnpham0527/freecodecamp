function permAlone(str) {

    const swapTwoCharsString = (string) => { //given a string, swap the first two chars and return only the first two
        return string[1] + string[0]; //if the string is longer than two characters, ignore everything after the first two
    }

    const swapTwoCharsArray = (array) => { //given an array of two chars, swap and return them
        let newArray = [array[1], array[0]];
        return newArray;
    }



    const generatePermutations2 = (restOfString, current = "") => {
        let allPermutations = [];
        let len = restOfString.length;

        if (len === 1) { //base case: restOfString's length is one character long
            allPermutations.push(current + restOfString);
        }
        else {
            for (let i = 0; i < len; i++) {
                let firstChar = restOfString[i]; //take turns being the first character
                let firstPartOfString = restOfString.slice(0, i); 
                let lastPartOfString = restOfString.slice(i+1, len); 
                let newString = firstPartOfString + lastPartOfString;
                let newCurrent = current + firstChar;
                let newPermutation = generatePermutations2(newString, newCurrent); //recursive call
                allPermutations.push(newPermutation);
            }
        }

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

    

    let allPermutationsArray = generatePermutations2(str);

    

    let noRepeatsArray = [];

    for (let i = 0; i < allPermutationsArray.length; i++) {
        let currentString = allPermutationsArray[i];
        if (!containsRepeat(currentString)) {
            noRepeatsArray.push(currentString);
        }
    }
    /* There is an error with no repeats array algorithm */

    document.getElementById("debug0").innerHTML = "Given string: " + str;
    document.getElementById("debug1").innerHTML = "All permutations: " + allPermutationsArray;
    document.getElementById("debug2").innerHTML = "noRepeatsArray: " + noRepeatsArray;

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
 * I have a string, "ab"
 * I'll set "a" as the first slot
 * I will recursively process the rest of the string and append it to "a" in the first slot
 *  I now have "b". I will set "b" as the first slot.
 *  I will recursively process the rest of the string and append it to "b" in the first slot
 *      Is there a string to process? No, it is empty. Return the empty string.
 *  My string is now "b".
 *  Is there a second slot for b? No, so return "b"
 * 
 * Now, I'll set "b" in the first slot
 *
 * Permutation function:
 * Given: a prefix, a current string
 * len = current string's length
 * If len == 1, push prefix + current string to permutation array
 * Else: for i = 0; i < current string's length; i++
 *  permutation(prefix + i, current string.slice(0, i) + current string.slice(i+1, len))
 * 
 * A solution: permutation and merge
 * 
 * Given string "abc"
 * total length = 3
 * Start with first position: "a". Length of this is 1, which is less than total length
 * Merge the second position before, in between, and after: "ba" "ab". Length of these is 2, which is less than total length
 * Merge the third position before, in between and after:
 *  "ba" -> "cba" "bca" "bac"
 *  "ab" -> "cab" "acb" "abc"
 *  The length of these is equal to total length, so push these to the permutation array
 */
/* I will need two functions: permutation and merge
    * Permutation returns an array of permutations
    * Permutation takes a string
    * Let permArray = []
    * if string's length == 1, then push the string to permArray
    * else:
    *  for (let i = 0; i < string.length; i++) {
    *      let lastIndex = string.length - 1;
    *      let lastChar = string.slice(lastChar);
    *      let restOfString = string.slice(0, lastChar);
    *      permArray = merge(permutation(restOfString), lastChar);
    * }
    * return permArray;
    * 
    * Merge takes a list array and a lastChar
    * let resultArray = [];
    * //Loop through all of the strings in the list
    * for each string in the given list array:
    *  // Insert the last character into all possible positions
    *      for (let i = 0; i < current string's length; i++) {
    *          let newString = current string.slice(0, i) + lastChar + current string.slice(i, current string's length) 
    *          resultArray.push(newString)
    * }
    * return resultArray
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

    /* Old code
    const generatePermutations = (string) => { //given a string, this function will generate all possible charater permutations
        let allPermutations = [];
        let len = string.length;

        if (len === 1) {
            allPermutations.push(string);
        }
        else {
            for (let i = 0; i < len; i++) {
                let lastIndex = len - 1 - i;
                let lastChar = string.slice(lastIndex); //store the last character of string
                let restOfString = string.slice(0, lastIndex); //store everything up to last character
                document.getElementById("debug1").innerHTML = restOfString;
                let newPermutation = merge(generatePermutations(restOfString), lastChar); //recursively merge the last character into the rest of the string
                allPermutations.push(newPermutation); //push new permutation into the array
            }
        }

        return allPermutations;
    }

    const merge = (arrayList, lastChar) => { //a helper function for generatePermutations

        document.getElementById("debug2").innerHTML = arrayList;

        let resultArray = [];
        for (let i = 0; i < arrayList.length; i++) {
            let currentString = arrayList[i];
            for (let j = 0; j < currentString.length; j++) {
                let newString = currentString.slice(0, j) + lastChar + currentString.slice(j, currentString.length); //create a new string that merges lastChar into current string
                resultArray.push(newString)
            }
        }

        return resultArray;
    }
    */