import { balances } from "../constants/dashboardData";

const initialState = {
  balances: balances,
};

const balanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BALANCE":
      return {
        ...state,
        balances: [...state.balances, action.payload],
      };
    case "REMOVE_BALANCE":
      return {
        ...state,
        balances: state.balances.filter(
          (balance) => balance.id !== action.payload
        ),
      };
    case "EDIT_BALANCE":
      return {
        ...state,
        balances: state.balances.map((balance) =>
          balance.id === action.payload.id
            ? { ...balance, ...action.payload }
            : balance
        ),
      };
    default:
      return state;
  }
};

export default balanceReducer;
