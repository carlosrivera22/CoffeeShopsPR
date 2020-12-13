const booksReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_BOOKS':
        return [...state, ...action.books];
      default:
        return state;
    }
  };
  
  export default booksReducer;