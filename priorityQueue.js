function PriorityQueue () {
  
    this.collection = [];
    this.printCollection = function() {
      console.log(this.collection);
    };

    
    function insert (element, indexToInsert) {
      let collectionStart = this.collection.slice(0, indexToInsert);
      collectionStart.push(element);
      let collectionEnd = this.collection.slice(indexToInsert, this.collection.length)
      this.collection = collectionStart.concat(collectionEnd);
    }

    // Only change code below this line
    this.enqueue = (elementToInsert) => { //format: ['human', 1]
      
      let inserted = false;

      for (let i = 0; i < this.collection.length; i++) {
        let currentCollectionElement = this.collection[i];
        if (elementToInsert[1] < currentCollectionElement[1]) { 

          insert(elementToInsert, i);

          //let collectionStart = this.collection(slice(0, i));
          //let collectionEnd = this.collection.slice(i, this.collection.length);


          inserted = true;
          break;
        }
      }

      if (inserted === false) {
        this.collection.push(elementToInsert);
      }

    };

    this.dequeue = () => {
      return this.collection.shift()[0] //the first item in the queue is the priority, so dequeue it
    };

    this.size = () => {
      return this.collection.length;
    };

    this.front = () => {
      return this.collection[0][0];
    };

    this.isEmpty = () => {
      return this.collection.length === 0;
    };
    // Only change code above this line
}


let myQueue = new PriorityQueue();
myQueue.collection = [['kitten', 2], ['dog', 4], ['rabbit', 6]];
//myQueue.collection = [['kitten', 2]];

document.getElementById("debug0").innerHTML = myQueue.collection;

myQueue.enqueue(['human', 3]);

document.getElementById("debug1").innerHTML = myQueue.collection;

/*
myQueue.enqueue(['human', 3]);

document.getElementById("debug1").innerHTML = myQueue.collection;
document.getElementById("debug2").innerHTML = myQueue.isEmpty();

let removed = myQueue.dequeue();

document.getElementById("debug3").innerHTML = removed;
document.getElementById("debug4").innerHTML = myQueue.size();
document.getElementById("debug5").innerHTML = myQueue.collection;
*/


/* Old Enqueue Code 2 */
/*
/*
      let priorityValueOfElementToInsert = elementToInsert[1];
      let indexToInsert = 0;

      for (let i = 0; i < this.collection.length; i++) {//traverse through the collection array
        currentElement = this.collection[i];

        if (priorityValueOfElementToInsert < currentElement[1]) { //
          break;
        }
        else { 
          indexToInsert = i;

          if (i+1 === this.collection.length) { //there are no more elements to search, so insert it at the end
            indexToInsert++;
          }
        }
      }

      let collectionStart = this.collection.slice(0, indexToInsert);
      let collectionEnd = this.collection.slice(indexToInsert, this.collection.length)
      collectionStart.push(elementToInsert);

      this.collection = collectionStart.concat(collectionEnd);
*/

//Old dequeue code
    /*
      //Initial variables
      let priorityValue = 0;
      let indexToReturn = 0;
      let currentElement = [];

      for (let i = 0; i < this.collection.length; i++) { //traverse through collection array
        currentElement = this.collection[i];
        if (i === 0) {
          priorityValue = currentElement[1]; //set the initial priorityValue to the current element's value
        }
        else {
          if (priorityValue < currentElement[1]) { //the current element has a higher priority, so set it the the element to be returned
            priorityValue = currentElement[1]; //set the priorityValue to the current element
            indexToReturn = i; //store the index of the current element
          }
        }
      }

      let elementToDequeue = this.collection[indexToReturn];
      
      let collectionStart = this.collection.slice(0, indexToReturn);
      let collectionEnd = this.collection.slice(indexToReturn+1, this.collection.length);

      this.collection = collectionStart.concat(collectionEnd);

      return elementToDequeue[0];
    */

//Old enqueue code
      /*
      console.log("Before: " + this.collection + " | Adding: " + element);
      let findIndex = -1;
      for (let i = 0; i < this.collection.length; i++) {
        if (element[1] < this.collection[i][1]) {
          findIndex = i;
          break;
        }
      }
      console.log("> findIndex: " + findIndex);
      if (findIndex === -1) {
        this.collection.push(element);
        console.log(">> Pushing to end...")
      }
      else if (findIndex === 0) {
        this.collection.unshift(element);
        console.log(">> Unshifting to front...")
      }
      else {
        //let arr = this.collection.slice(0,findIndex).concat(element).concat(collectionslice(findIndex));
        console.log(">> Concatting...")
        let arr = this.collection.slice(0,findIndex);
        console.log(">> findIndex returns: " + collection[findIndex]);
        console.log(">> New Array: " + arr);
        let arr2 = this.collection.slice(findIndex);
        console.log(">> New Array2: " + arr);
        let arr3 = arr.concat(element).concat(arr2);
        console.log(">> New Array3: " + arr);
        this.collection = arr3;
      
        this.collection = arr.slice();
      }
      console.log(">>> After: " + this.collection.join('; '));
      console.log("");
      */
