/*
Challenge: "Algorithms: Find the Symmetric Difference"
Link: https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference
*/

function sym(args) {
    
    let mapOfArguments = [];
  
    for (let i = 0; i < arguments.length; i++) {
        mapOfArguments.push(convertArrToMap(arguments[i]));
    }
  
    let returnMap = {};

    switch (mapOfArguments.length) {
        case 0: 
            return returnMap;
        case 1:
            return mapOfArguments[0];
        default:
            returnMap = mapOfArguments[0];
            for (let i = 1; i < mapOfArguments.length; i++) {              
                let tempMap = findSymmDiff(returnMap,mapOfArguments[i]);
                returnMap = tempMap;
            }
    }
    
    let returnMap2 = returnMapOnlyOnes(returnMap);

    let returnArr = convertMapToArr(returnMap2);

    return returnArr;
  
    function convertArrToMap(arr) {
        let map = {};
        for (let i in arr) {
            if (map.hasOwnProperty(arr[i])) {
                map[arr[i]]++;
            }
            else {
                map[arr[i]] = 1;
            }
        }
        return map;
    };

    function convertMapToArr(map) {
        let arr = [];
        for (let key in map) {
            arr.push(parseInt(key));
        }
        return arr;
    };

    function returnMapOnlyOnes(map) {
        let newMap = {};
        for (let key in map) {
            if (map[key] === 1) {
                newMap[key] = 1;
            }
        }
        return newMap;
    }

    function findSymmDiff(map1, map2) {
        let newMap = {};
        for (let key1 in map1) {
            if (!map2.hasOwnProperty(key1)) {
                if (newMap.hasOwnProperty[key1]) {
                    newMap[key1]++;
                }
                else {
                    newMap[key1] = 1;
                }
                
            }
        }
        for (let key2 in map2) {
            if (!map1.hasOwnProperty(key2)) {
                if (newMap.hasOwnProperty[key2]) {
                    newMap[key2]++;
                }
                else {
                    newMap[key2] = 1;
                }
            }
        }
        return newMap;
    };

    function printMap(map) {
        let arr = [];
        for (let key in map) {
            if (map.hasOwnProperty(key)) {
                arr.push([key, map[key]]);
            }
        }
        console.log(arr.join(' | '));
    }

}