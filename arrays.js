console.log("wassup mutha fukka")

// Challenge 1
var test1 = 'otto'
var testSplit = test1.split('').reverse().join('')
// var testRev = testSplit;
// var newArr = testRev;

if (test1 === testSplit) {
  console.log('true')
} else {
  console.log('false')
};

// Challenge 2

var book1 = "Catch 22"
var book2 = "Slaughterhouse 5"
var book3 = "Fahrenheit 451"
var bookArr = [];

var arr = book3.split('')
for (var j=0; j<arr.length; j++) {
  if (+arr[j]) {
  console.log(arr[j]);
  bookArr.push(arr[j]);
  }
}

console.log(bookArr);