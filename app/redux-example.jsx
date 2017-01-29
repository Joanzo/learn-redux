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
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;
});
// unsubscribe();
var currentState = store.getState();
console.log('current state', currentState);

var action = {
  type: 'CHANGE_NAME',
  name: 'Andrew'
}

store.dispatch(action);



store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Emily'
});

console.log('Name should be andrew', store.getState());
