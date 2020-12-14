import axios from 'axios';

export const loadShops = () => {
  return async (dispatch) => {
    try {
      const shops = await axios.get('http://127.0.0.1:8000/api/coffee_shops/');
      return dispatch(setShops(shops.data));
    } catch (error) {
      console.log('error:', error);
    }
  };
};

export const setShops = (shops) => ({
  type: 'SET_SHOPS',
  shops
});