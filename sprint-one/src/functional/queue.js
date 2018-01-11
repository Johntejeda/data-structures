var Queue = function() {

  var someInstance = {};
  // Use an object with numeric keys to store value
  var storage = {};
  var last = 0;
  var first = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[first] = value;
    first++;
  };

  someInstance.dequeue = function() {
    if (first - last === 0) {
      return {};
    }
    if (first > 0) {
      var result = storage[last];
      delete storage[last];
      last++;
      return result;
    } else {
      return undefined;
    }
  };

  someInstance.size = function() {
  return first - last;
};

  return someInstance;
};
