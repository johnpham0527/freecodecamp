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
      
      for (let i = 0; i < this.collection.length; i++) {
        let currentCollectionElement = this.collection[i];
        if (elementToInsert[1] < currentCollectionElement[1]) { //insert element
          let collectionStart = this.collection.slice(0, i);
          collectionStart.push(elementToInsert);
          let collectionEnd = this.collection.slice(i, this.collection.length);
          this.collection = collectionStart.concat(collectionEnd);
          return;
        }
      }

        this.collection.push(elementToInsert); //insert at the end, since it hasn't been inserted yet

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

myQueue.enqueue(['human', 7]);

document.getElementById("debug1").innerHTML = myQueue.collection;

/*
myQueue.enqueue(['human', 3]);

document.getElementById("debug1").innerHTML = myQueue.collection;
document.getElementById("debug2").innerHTML = myQueue.isEmpty();
*/
let removed = myQueue.dequeue();

document.getElementById("debug3").innerHTML = removed;
/*
document.getElementById("debug4").innerHTML = myQueue.size();
*/
document.getElementById("debug5").innerHTML = myQueue.collection;
