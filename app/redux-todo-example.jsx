var redux = require('redux');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
}
var reducer = (state = stateDefault, action) => {
  switch(action.type) {
    case "CHANGE_SEARCH_TEXT":
      return {
        ...state,
        searchText : action.searchText
      }
    default:
      return state;
  }
  return state;
};
// Starting of our main Redux App Example
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('current state', currentState);

store.dispatch({
  type: "CHANGE_SEARCH_TEXT",
  searchText: 'New Search Text'
});

console.log('Search text should be changed', store.getState());
