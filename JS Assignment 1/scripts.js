// ques number 1 solution

 function abc(n) {
    for (var i = 0; i < n; i++) {
      var star="";
      for (var j = n - 1; j >= i; j--) {
       star = star.concat("* ");  
      }
    console.log(star.trim());
    }
  }
  abc(5);

  // ques number 1 solution ends

 // ques number 2 solution

function censor(str){
  var splitted= str.split(" ");

  for(var i=0; i<splitted.length;i++){
      if(splitted[i].length > 4){
         splitted[i]="*".repeat(splitted[i].length);

      }
  }
  var finalStr=splitted.join(" ");
      console.log(finalStr);
}

 // ques number 2 solution ends

 // ques number 3 solution

 function toArray(obj) {
  return Object.entries(obj);
}
console.log(toArray({ a: 11, b: 22, c:33}));
console.log(toArray({ name: "Srijana", address: "Nepal"}));

 // ques number 3 solution ends
 //ques numver 4 solution
 function repeatationFilter(arr) {
  var result = [];
  for (i = 0; i < arr.length; i++) {
  var repetition = new Set(arr[i]);
    if (repetition.size === 1) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(repeatationFilter(["88", "999", "22", "545", "133"]));
console.log(repeatationFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]));


  //ques numver 4 solution ends 
//ques numver 5 solution
function keysAndValues(obj) {
   var keys = Object.keys(obj);
  var sortedKeys = keys.sort();

  var sortedValues = [];
  for ( var i = 0; i < keys.length; i++) {
    sortedValues[i] = obj[keys[i]];
  }
  return [keys, sortedValues];
}

console.log(keysAndValues({firstName: "John",lastName: "Doe",}));
console.log(keysAndValues({A: "Apple", B: "Bag", C: "Cat", D: "Dog"}));

  //ques numver 5 solution ends 
