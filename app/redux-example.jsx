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

  console.log('New Action', action);

  switch(action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }

  return state;
};
// Starting of our main Redux App Example
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('current state', currentState);

var action = {
  type: 'CHANGE_NAME',
  name: 'Andrew'
}

store.dispatch(action);

console.log('Name should be andrew', store.getState());
