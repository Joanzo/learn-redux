var redux = require('redux');



/*
console.log('Starting redux example');

// Pure function editing object without editing the original
function changeProp(obj) {
  return {
    ...obj,
    name: "Jen"
  }

  // This below will change the obj directly and not considered as pure function
  // obj.name = "Jen";
  // return obj;

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
*/



var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  // console.log('Name is', state.name);
  // document.getElementById('app').innerHTML = state.name;

  console.log('New State: ', store.getState());

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="'+state.map.url+'" href="_blank">View Your Location</a>'
  }

});
// unsubscribe();
var currentState = store.getState();
console.log('current state', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Andrew'));

store.dispatch(actions.addHobby('Running'));

store.dispatch(actions.addHobby('Walking'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Emily'));

store.dispatch(actions.addMovie('The Avengers 2', 'Action'));

store.dispatch(actions.addMovie('Iron Man 3', 'Action'));

store.dispatch(actions.removeMovie(2));


/*
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
*/
