function myEach(collection, callback) {
    // Check if the collection is an array
    if (Array.isArray(collection)) {
      // Iterate over each element in the array
      for (let i = 0; i < collection.length; i++) {
        // Apply the callback function to the current element
        callback(collection[i], i, collection);
      }
    } else if (typeof collection === 'object') {
      // If the collection is an object, iterate over its keys
      for (let key in collection) {
        // Apply the callback function to the current key-value pair
        callback(collection[key], key, collection);
      }
    }
  
    // Return the original collection
    return collection;
  }

  function myMap(collection, callback) {
    if (Array.isArray(collection)) {
      const newArray = [];
      for (let i = 0; i < collection.length; i++) {
        newArray.push(callback(collection[i]));
      }
      return newArray;
    } else if (typeof collection === "object") {
      const newArray = [];
      for (let key in collection) {
        newArray.push(callback(collection[key]));
      }
      return newArray;
    } else {
      throw new Error("Invalid collection");
    }
  }
  function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue;
  
    for (let key in collection) {
      if (accumulator === undefined) {
        accumulator = collection[key];
      } else {
        accumulator = callback(accumulator, collection[key]);
      }
    }
    return accumulator;
  }
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i]; // return the first value that passes the test
        }
      }
    } else {
      for (let key in collection) {
        if (predicate(collection[key])) {
          return collection[key]; // return the first value that passes the test
        }
      }
    }
    return undefined; // return undefined if no value passes the test
  }
  function myFilter(array, callback) {
    const filteredArray = [];
  
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        filteredArray.push(array[i]);
      }
    }
  
    if (filteredArray.length === 0) {
      return [];
    }
  
    return filteredArray;
  }
  function mySize(collection) {
    if (typeof collection === 'object') {
      return Object.values(collection).length;

    } 
    else if (Array.isArray(collection)) {
      return collection.length;
    }
  }
  function myFirst(array, n) {
    // Check if n is provided
    if (n === undefined) {
      // Return the first element of the array
      return array[0];
    } else {
      // Return the first n elements of the array
      return array.slice(0, n);
    }
  }
  function myLast(array, n) {
    if (n) {
      return array.slice(-n);
    } else {
      return array[array.length - 1];
    }
  }
  function myKeys(object) {
    return Object.keys(object);
  }
  function myValues(object) {
    return Object.values(object);
  }