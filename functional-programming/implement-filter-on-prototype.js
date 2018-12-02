/*
It would teach us a lot about the filter method if we try to implement a version of it that behaves exactly like Array.prototype.filter(). It can use either a for loop or Array.prototype.forEach().

Note: A pure function is allowed to alter local variables defined within its scope, although, it's preferable to avoid that as well.
*/

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line
  for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
          newArray.push(this[i]);
      }
  }
  // Add your code above this line
  return newArray;

};

Array.prototype.myFilters = function(callback) {
    var newArray = [];
    this.forEach( (x) => (callback(x) ? newArray.push(x) : null ));
    return newArray;
}

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});

var new_t = s.myFilters(function(item){
    return item % 2 === 1;
  });


console.log(new_s);
console.log(new_t);