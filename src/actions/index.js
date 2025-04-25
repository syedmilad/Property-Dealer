export const ADD_BALANCE = "ADD_BALANCE";
export const REMOVE_BALANCE = "REMOVE_BALANCE";
export const EDIT_BALANCE = "EDIT_BALANCE";

export const SET_MENU_ITEM = "SET_MENU_ITEM";
export const SET_SUB_MENU_ITEM = "SET_SUB_MENU_ITEM";

export const setMenuItem = (payload) => ({
  type: SET_MENU_ITEM,
  payload,
});

export const setSubMenuItem = (payload) => ({
  type: SET_SUB_MENU_ITEM,
  payload,
});

export const addBalance = (balance) => {
  /** Balance will be an Object */
  return {
    type: ADD_BALANCE,
    payload: balance,
  };
};

export const removeBalanceAction = (id) => {
  /** ID will be a String */
  return {
    type: REMOVE_BALANCE,
    payload: id,
  };
};

export const editBalance = (balance) => {
  /** Balance will be an Object */
  return {
    type: EDIT_BALANCE,
    payload: balance,
  };
};
