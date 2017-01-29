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

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};
var nextHobbyId = 1;
var nextMovieId = 1;

var oldreducer = (state = stateDefault, action) => {
  // var state = state || {name : 'Anonymous'};

  console.log('New Action', action);

  switch(action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      };
      case 'REMOVE_HOBBY':
        return {
          ...state,
          hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
        }
      case 'ADD_MOVIE':
        return {
          ...state,
          movies: [
            ...state.movies,
            {
              id: nextMovieId++,
              title: action.title,
              genre: action.genre
            }
          ]
        };
      case 'REMOVE_MOVIE':
        return {
          ...state,
          movies: state.movies.filter((movie) => movie.id !== action.id)
        }
    default:
      return state;
  }

  return state;
};

var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  };
};
var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => hobby.id !== action.id)
    default:
      return state;
  };
};
var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          title: action.title,
          genre: action.genre
        }
      ];
    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id !== movie.id)
    default:
      return state;
  };
};

var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});

// Starting of our main Redux App Example
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;

  console.log('New State: ', store.getState());
});
// unsubscribe();
var currentState = store.getState();
console.log('current state', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Andrew'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Walking'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
})

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Emily'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'The Avengers 2',
  genre: 'Action'
});
store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Iron Man 3',
  genre: 'Action'
});
store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 2
});
