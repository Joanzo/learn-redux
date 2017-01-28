var redux = require('redux');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
}
var reducer = (state = stateDefault, action) => {
  return state;
};
// Starting of our main Redux App Example
var Store = redux.createStore(reducer);

var currentState = Store.getState();
console.log('current state', currentState);
