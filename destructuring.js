/*
  Once you complete a problem, refresh ./destructuring.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}
// Do not edit the code above.

/*
  Use object destructuring to save the property values from the object carDetails into new variables. 
*/

let color = carDetails.color
let make = carDetails.make
let model = carDetails.model
let year = carDetails.year



////////// PROBLEM 2 //////////

/*
  In the function below named greeting, it is receiving an object as a parameter. 
  Use object destructuring to save the object properties to new variables. 
  The property names are firstName, lastName, and title.
*/

function greeting( obj ) {
  let title = obj.title
  let firstName = obj.firstName
  let lastName = obj.lastName
  
  // Do not edit the code below.
  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
  // Do not edit the code above.
}



////////// PROBLEM 3 //////////

/*
  Write a function called totalPopulation that will take in an object.
  That object will have 4 properties named utah, california, texas and arizona.
  The property values will be numbers.
  Use object destructuring to save the property values to new variables.
  Sum up the values and return the total number.
*/
let testobj = {
  utah: 1,
  california: 2,
  texas: 3,
  arizona: 4,
}
function totalPopulation(obj){
  let ut = Number(obj.utah)
  let ca = Number(obj.california)
  let tx = Number(obj.texas)
  let az = Number(obj.arizona)

  return ut + ca + tx + az
}




////////// PROBLEM 4 //////////

/*
  Write a function called ingredients that will take in an object. 
  This object will have 3 properties named carb, fat, and protein. 
  The property values will be strings. 
  Use object destructuring to save the property values to new variables. 
  Push these new variables to an array and return the array. 
*/

function ingredients(obj){
  let s1 = obj.carb
  let s2 = obj.fat
  let s3 = obj.protein

  return [s1,s2,s3]
}


////////// PROBLEM 5 //////////

/*
  Now we will use object destructuring as the function's parameter instead of destructuring the object inside of the function declaration.
  Example:
    function example( {one, two, three} ) {
      return one + two + three
    }

  Write a function called largeNumbers that will take a destructured object as it's parameter.
  The object properties will be named first, second, and third and their values will be numbers.
  Find the smallest number of the three and return that number.
*/

function largeNumbers({first, second, third}){
  if(first < second){
    if(first < third){
      return first
    } else {
      return third
    }
  }
  return second
}

console.log(largeNumbers({first:5, second:20, third: 35}))


////////// PROBLEM 6 //////////

/*
  Write a function called numberGroups that will take a destructured object as it's parameter.
  The object properties will be named a, b, and c and their values will be arrays of numbers.
  Find the longest array and return that array.
*/

function numberGroups({a,b,c}){
  if(a.length > b.length){
    if(a.length > c.length){
      return a
    } else if( c.length > b.length) {
      return c
    }
  }
  return b
}

console.log(numberGroups({a: [1,2,3], b: [1,2,3,4], c:[1,2,3,4,5]}))


