function updateInventory(arr1, arr2) {
    //https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update
    // All inventory must be accounted for or you're fired!

    //console.log("**** Hello **** ")

    //console.log(`> arr1: ${arr1.join('; ')}`);
    //console.log(`> arr2: ${arr2.join('; ')}`);

    let inventoryMap = convertArrayToMap(arr1);

    //console.log(`>>> Printing map of arr1...`)
    //printMap(inventoryMap);


    let updatesMap = convertArrayToMap(arr2);

    //console.log(`>>> Printing map of arr2...`)
    //printMap(updatesMap);

    let newMap = updateMap(inventoryMap, updatesMap);

    //console.log(`>>> Printing updated inventory map...`)
    //printMap(newMap);

    let newArr = convertMapToSortedArray(newMap);

    //console.log(`>>> newArr: ${newArr.join('; ')}`);

    arr1 = newArr.slice();

    //console.log(`Modified arr1: ${arr1.join('; ')}`);

    return arr1;


    function convertArrayToMap(arr) {
        let map = {};
        for (let i in arr) {
            map[arr[i][1]] = arr[i][0];
        }
        return map;
    }

    function convertMapToSortedArray(map) {
        let newArr = [];
        let keysArr = [];
        
        for (let key in map) {
            keysArr.push(key);
        }

        //console.log(`>> keysArr: ${keysArr}`);

        keysArr.sort();

        //console.log(`>> Sorted keysArr: ${keysArr}`);

        for (let i in keysArr) {
            newArr.push([map[keysArr[i]] , keysArr[i]]);
        }

        //console.log(`>> newArr: ${newArr.join('; ')}`);

        return newArr;
    }

    function updateMap(targetMap, sourceMap) {
        let newMap = Object.assign({}, targetMap);
        for (let key in sourceMap) {
            if (newMap.hasOwnProperty(key)) {
                newMap[key] += sourceMap[key];
            }
            else {
                newMap[key] = sourceMap[key];
            }
        }
        return newMap;
    }

    function printMap(map) {
        for (let key in map) {
            console.log(`Key: ${key} | Value: ${map[key]}`)
        }
    }

}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
