function PriorityQueue () {
    this.collection = [];
    this.printCollection = function() {
      console.log(this.collection);
    };
    // Only change code below this line
    this.enqueue = (element) => {
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
    };
    this.dequeue = () => {
      return this.collection.shift();
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
