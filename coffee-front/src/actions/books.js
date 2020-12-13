import axios from 'axios';

export const loadBooks = () => {
  return async (dispatch) => {
    try {
      const books = await axios.get('http://127.0.0.1:8000/api/books/');
      console.log(books)
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