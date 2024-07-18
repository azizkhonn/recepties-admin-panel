import { ADD_TO_TODAY_MENU, REMOVE_FROM_TODAY_MENU } from '../actions/types';

const initialState = {
  todayMenu: [],
};

const todayMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_TODAY_MENU:
      return {
        ...state,
        todayMenu: [...state.todayMenu, { ...action.payload, key: action.payload.id }],
      };
    case REMOVE_FROM_TODAY_MENU:
      return {
        ...state,
        todayMenu: state.todayMenu.filter((item) => item.key !== action.payload),
      };
    default:
      return state;
  }
};

export default todayMenuReducer;
