import axios from 'axios';

export const loadBooks = () => {
  return async (dispatch) => {
    try {
      const books = await axios.get('https://coffeeshopspr.herokuapp.com/api/books/');
      return dispatch(setBooks(books.data));
    } catch (error) {
      console.log('error:', error);
    }
  };
};

export const setBooks = (books) => ({
  type: 'SET_BOOKS',
  books
});