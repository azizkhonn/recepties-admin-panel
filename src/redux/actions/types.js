export const ADD_TO_TODAY_MENU = 'ADD_TO_TODAY_MENU';
export const REMOVE_FROM_TODAY_MENU = 'REMOVE_FROM_TODAY_MENU';

export const addToTodayMenu = (recipe) => ({
  type: ADD_TO_TODAY_MENU,
  payload: recipe,
});

export const removeFromTodayMenu = (key) => ({
  type: REMOVE_FROM_TODAY_MENU,
  payload: key,
});
