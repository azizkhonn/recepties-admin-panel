import { ADD_TO_TODAY_MENU, REMOVE_FROM_TODAY_MENU } from './types';

export const addToTodayMenu = (recipe) => ({
  type: ADD_TO_TODAY_MENU,
  payload: recipe,
});

export const removeFromTodayMenu = (id) => ({
  type: REMOVE_FROM_TODAY_MENU,
  payload: id,
});
