// Assignment 2 
// ques number 1 solution
// Convert the list of names in array of object like:
var names = `Neeta sapkota
neha shiwakoti
Srijana Khatiwada 
Smrity Dhakal
Sami Chakradhar
Kirtee Maharjan
Trija Thebe
Sindhu Aryal
Kusum Ranjitkar
Elisha Bista
Rachana kafle
Barsha Maharjan
Pooja Gurung
Bisikha Subedi
Kritika Baral
Srijana Thulung`;
names = names.split('\n');

function result(array) {
	return array.map(function(value, index) {
		var obj = {};
        var name = value.split(' ');
	    obj['id'] = index + 1;
	    obj['firstName'] = name[0];
	    obj['lastName'] = name[1];
	    return obj;
	});
};

console.log(result(names));


// ques number 2 solution 
// Given the result of the above problem, create a function which takes a character and prints the count of first names which starts with letter that letter and which donot start with given letter. 
function finder(array, letter) {
	var getArrayFromQ1 = result(array);
	var equalTo = getArrayFromQ1.filter(function(value) {
		return value.firstName[0] == letter.toUpperCase();
	});
	var startWith = equalTo.length;
	var startWithout = getArrayFromQ1.length - startWith;
	return letter + ': ' + startWith + ' and ' + startWithout;
};

console.log(finder(names, 's'));
console.log(finder(names, 'e'));
console.log(finder(names, 'k'));
console.log(finder(names, 'a'));
console.log('\n\n');


//   ques 3 solution
// Convert the array of the result in Question 1, in following format

function result3(array) {
	var getArrayFromQ1 = result(array);
	return getArrayFromQ1.reduce(function(acc, value, index) {
		var id = value.id;
		delete value.id;
		acc[id] = value;
		return acc;
	}, {});
	
};
console.log(result3(names));

// ques num 4 
// Write a function that returns the longest sequence of consecutive zeroes in a binary string.

function longestZero(str) {
	return str.split('1').sort().pop().length;
  }
  
  console.log(longestZero("01100001011000"));
  console.log(longestZero("100100100"));
  console.log(longestZero("11111"));
  console.log("\n");

  // ques num 5
//   Create a function that takes a string and replaces the vowels with another character.
//a = 1, e = 2, i = 3, o = 4, u = 5

function replaceVowels(string) {
    var str = string.split("");
    for (var i = 0; i < string.length; i++) {
      switch (str[i]) {
        case "a":
          str[i] = 1;
          break;
        case "e":
          str[i] = 2;
          break;
        case "i":
          str[i] = 3;
          break;
        case "o":
          str[i] = 4;
          break;
        case "u":
          str[i] = 5;
          break;
        default:
          str[i];
      }
    }
    return str.join("");
  }
  
  console.log(replaceVowels("karachi"));
  console.log(replaceVowels("chembur"));
  console.log(replaceVowels("khandbari"));
