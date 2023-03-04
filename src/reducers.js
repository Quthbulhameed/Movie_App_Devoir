const initialState = {
    movies: [
      {
        id: 1,
        title: 'Movie 1',
        category: 'Action',
        likes: 10,
        dislikes: 2,
      },
      {
        id: 2,
        title: 'Movie 2',
        category: 'Comedy',
        likes: 7,
        dislikes: 1,
      },
      {
        id: 3,
        title: 'Movie 3',
        category: 'Drama',
        likes: 4,
        dislikes: 3,
      },
    ],
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_MOVIE':
        return {
          ...state,
          movies: [...state.movies, action.payload],
        };
      case 'DELETE_MOVIE':
        return {
          ...state,
          movies: state.movies.filter(movie => movie.id !== action.payload),
        };
      case 'TOGGLE_LIKE':
        return {
          ...state,
          movies: state.movies.map(movie => {
            if (movie.id === action.payload) {
              return {
                ...movie,
                likes: movie.likes + 1,
              };
            }
            return movie;
          }),
        };
      default:
        return state;
    }
  };
  
  export default movieReducer;
  