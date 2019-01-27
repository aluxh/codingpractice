function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
  
    // var regex = new RegExp(/([a-z]+)(\W*)([A-Z]{1})/g);
    // console.log(regex.test(str));
    // return str.replace(regex, '$1-$3').toLowerCase();

    str = str.split(/\s|_|(?=[A-Z])/);
    console.log(str);
    str = str.join("-").toLowerCase();

    return str;


  }
  
  console.log(spinalCase('This Is Spinal Tap'));
  console.log(spinalCase("thisIsSpinalTap"));
  console.log(spinalCase("The_Andy_Griffith_Show"));
  console.log(spinalCase("Teletubbies say Eh-oh"));