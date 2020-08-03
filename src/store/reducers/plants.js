import {
  GET_PLANTS,
  GET_PLANTS_SUCCESS,
  GET_PLANTS_FAILURE
} from "../constants";

const initialState = { plant: [], waiting: false, error: undefined };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLANTS:
      return { ...state, waiting: true, error: undefined };
    case GET_PLANTS_SUCCESS: {
      return { ...state, waiting: false, tasks: action.payload };
    }
    case GET_PLANTS_FAILURE: {
      return { ...state, waiting: false, error: action.payload };
    }

    default:
      return state;
  }
};
