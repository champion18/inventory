import {
  NEW_CAT_REQUEST,
  NEW_CAT_SUCCESS,
  NEW_CAT_FAIL,
  NEW_CAT_RESET,
  CLEAR_ERRORS,
} from "../constants/catConstants";

export const newCatReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_CAT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_CAT_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_CAT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_CAT_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
