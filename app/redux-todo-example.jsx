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
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('Search Text is', state.searchText);
  document.getElementById('app').innerHTML = state.searchText;
});

var currentState = store.getState();
console.log('current state', currentState);

store.dispatch({
  type: "CHANGE_SEARCH_TEXT",
  searchText: 'New Search Text'
});
store.dispatch({
  type: "CHANGE_SEARCH_TEXT",
  searchText: 'Going to mall'
});
store.dispatch({
  type: "CHANGE_SEARCH_TEXT",
  searchText: 'Play with wife'
});
console.log('Search text should be changed', store.getState());
