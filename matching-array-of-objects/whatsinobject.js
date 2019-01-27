function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var key = Object.keys(source);

    arr = collection.filter(row => {
        for (let i of key) {
            if (row[i] !== source[i]) {
                return (+false);
            }
        }
        return (+true);
    });

    // arr = collection.filter(row => {
    //     return key.every(x => {
    //         return row[x] === source[x];
    //     });
    // });
        
    // Only change code above this line
    return arr;
  }

  module.exports = whatIsInAName;