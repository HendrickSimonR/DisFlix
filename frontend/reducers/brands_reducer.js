import { RECEIVE_BRANDS, RECEIVE_BRAND } from '../actions/brand_actions';

const brandsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_BRANDS:
      return action.brands;
    case RECEIVE_BRAND:
      newState[action.brand.id] = action.brand;
      return newState;
    default:
      return oldState;
  }
};

export default brandsReducer;