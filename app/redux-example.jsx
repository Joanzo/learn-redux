var redux = require('redux');

console.log('Starting redux example');

// Pure function editing object without editing the original
function changeProp(obj) {
  return {
    ...obj,
    name: "Jen"
  }
/*
  // This below will change the obj directly and not considered as pure function
  obj.name = "Jen";
  return obj;
  */
}

var Person = {name: "Mathew", age: 25 };
var changedPerson = changeProp(Person);
console.log(Person);
console.log(changedPerson);

var reducer = (state = {name: 'Anonymous'}, action) => {
  // var state = state || {name : 'Anonymous'};
  return state;
};
// Starting of our main Redux App Example
var Store = redux.createStore(reducer);

var currentState = Store.getState();
console.log('current state', currentState);
