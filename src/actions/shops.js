import axios from 'axios';

export const loadShops = () => {
  return async (dispatch) => {
    try {
      const shops = await axios.get('https://coffeeshopspr.herokuapp.com/api/coffee_shops/');
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