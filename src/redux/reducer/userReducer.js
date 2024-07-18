import { ADD_TO_TODAY_MENU } from '../actions/types';

const initialState = {
  todayMenu: [],
};

const todayMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_TODAY_MENU:
      return {
        ...state,
        todayMenu: [...state.todayMenu, action.payload],
      };
    // Handle other actions if needed
    default:
      return state;
  }
};

export default todayMenuReducer;
