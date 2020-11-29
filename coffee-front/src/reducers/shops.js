const shopsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_SHOPS':
        return [...state, ...action.shops];
      default:
        return state;
    }
  };
  
  export default shopsReducer;